import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import {logger} from './util/Logger'
import {InversifyExpressServer} from 'inversify-express-utils'
import axios, { AxiosRequestConfig } from 'axios'
import * as https from 'https'
import path = require('path')
import { Container } from 'inversify'

type HttpsConfig = {
    hostname: string;
    path: string;
    method: 'POST' | 'GET';
};

(async () => {
    const container = new Container()

    /*  When using InversifyExpressServer without a controller, {forceControllers: false} */
    let server = new InversifyExpressServer(container, null, null, null, null, false) 
    /* See: https://github.com/inversify/inversify-express-utils/pull/97 */
    
    server.setConfig((app) => {
        // let express support JSON bodies
        app.use(bodyParser.json())
        // error handling
        app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
            logger.error(err.stack)
            next(err)
        })
        app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(500).send('Internal Server Error')
        })
        app.use(express.static(path.join(__dirname, '../web/public')))

        // repeater for CORS requests
        app.get('/repeater', (expressRequest, expressResponse) => {
            // const config = JSON.parse(expressRequest.query.config) as HttpsConfig
            // let proxiedRequest = https.request(config, (proxiedResponse) => {
            //     let data = '';
            //     proxiedResponse.on('data', (chunk) => { data += chunk; });
            //     proxiedResponse.on('end', () => {
            //         expressResponse.send(data)
            //     })
            // })
            // proxiedRequest.on('error', (error) => {
            //     expressResponse.error(error)
            // })
            // proxiedRequest.end()

            const config = JSON.parse(expressRequest.query.config) as AxiosRequestConfig

            axios.request(config).then(response => {
                expressResponse.send(response.data)
            }).catch(error => {
                expressResponse.status(error.status || 500).send(error.data || 'Internal Server Error')
            })
        })
        app.get('*', (req, res) => {
            res.sendFile('/web/public/index.html', {'root': __dirname + '/../'})
        })
    })
    
    let app = server.build()

    // setup express middleware logging and begin listening
    app.listen(8081, function () {
        logger.info('Listening on port 8081!')
    })
})()

// Submit HTTP request to the server
function submit_request(http_method, api_host, request_path, query_string, payload) {
    let full_request_path = `${request_path}?${query_string}`;
    
    let headers = {
        'User-Agent': 'FinMason NodeJS Example Client/2.0.1'
    };
    if (('POST' === http_method) && (null != payload)) {
        headers['Content-Type']   = 'application/json; charset=utf-8';
        headers['Content-Length'] = payload.length
    };
    let http_opts = {
        headers:  headers,
        hostname: api_host,
        method:   http_method,
        path:     full_request_path,
        port:     443,
        protocol: 'https:' // SSL is required for all requests
    };

    let req = https.request(http_opts, (res) => {

        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            process.exit(0);
        });
    });
    req.on('error', (er) => {
        process.exit(1);
    });
    req.write(payload);
    req.end();
};

