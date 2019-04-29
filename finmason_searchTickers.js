'use strict';

// The following libraries are required
let cryptojs = require('crypto-js'),
    http     = require('https');

require('dotenv').config()

/*
 * Update the following constants with your account credentials
 */
const API_KEY         = process.env.FINMASON_API_KEY;
const API_SECRET      = process.env.FINMASON_API_SECRET;
const API_HOST        = process.env.FINMASON_API_HOST;
const API_PATH        = 'v2';
const API_METHOD      = 'asset/search';
const HTTP_METHOD     = 'GET';
const API_SIG_METHOD  = 'HmacSHA256';
const API_SIG_VERSION = '2';
const PAYLOAD         = '{\n' +
                        '   "portfolio_id" : "Demo",\n' +
                        '    "portfolio_stats" : ["finscore"],\n' +
                        '    "positions" : [{\n' +
                        '        "cusip" : "78462F103",\n' +
                        '        "value" : 60000.0\n' +
                        '      }\n' +
                        '    ]\n' +
                        '}';

console.log(' === FinMason API Client Example ===');
console.log();
console.log(` --- API Key:    ${API_KEY}`);
console.log(` --- API Host:   ${API_HOST}`);
console.log(` --- API method: ${API_METHOD}`);

// First we initialize some variables for later use

// Build request path that will be used by several other methods later
let request_path = `/${API_PATH}/${API_METHOD}`;

// The following hash contains query string parameters
let parameters = {
    // the following parameters are required
    fm_apikey:         API_KEY,
    signature_method:  API_SIG_METHOD,
    signature_version: API_SIG_VERSION,
    ticker: 'AAPL',
    max: 5,
    instrument: 'S',

    // the rest of the parameters are defined by the client and are method specific
    // Foo:              'Bar',
    // Param1:           'Value1',
};

// STEP 1: Get the current timestamp for signing the request and make it one of the parameters
parameters['timestamp'] = get_current_timestamp();

// STEP 2: Build Canonical Request
let canonical_request = build_canonical_request(HTTP_METHOD, API_HOST, request_path, parameters);

// STEP 3: Compute Request Signature, Base64 encode it, and add to the parameter list
let signature_bytes = compute_signature(canonical_request, API_SECRET, API_SIG_METHOD, API_SIG_VERSION);
parameters['signature'] = encode_signature(signature_bytes);

// STEP 4: Build the new query string and submit the API request
 let query_string = build_query_string(parameters);
submit_request(HTTP_METHOD, API_HOST, request_path, query_string, PAYLOAD);

console.log(' === API Request Complete ===');

// This function gets the current timestamp in ISO-8601 format
function get_current_timestamp() {
    let timestamp = new Date().toISOString().slice(0, 19) + 'Z';

    console.log(` --- Timestamp:  ${timestamp}`);
    return timestamp;
};

// This function builds canonical URL for request signing
function build_canonical_request(http_method, api_host, request_path, parameters) {
    let canonical_request = http_method  + '\n' +
                            api_host     + '\n' +
                            request_path + '\n' +
                            build_query_string(parameters);

    console.log(' --- Canoncial Request:');
    console.log(canonical_request);
    console.log();
    return canonical_request;
};

// This function computes the request signature
function compute_signature(canonical_request, api_secret, api_sig_method, api_sig_version) {
    if ('HmacSHA256' !== api_sig_method) {
        throw new Error('The only supported signature method is HmacSHA256');
    }
    if ('2' !== api_sig_version) {
        throw new Error('The only supported signature protocol version is 2');
    }

    return cryptojs.HmacSHA256(canonical_request, api_secret);
};

// This function Base64 encodes byte array signature and returns it as a string
function encode_signature(signature_bytes) {
    let signature = cryptojs.enc.Base64.stringify(signature_bytes);

    console.log(` --- Signature: ${signature}`);
    return signature;
};

// This function creates a query string from the parameter pairs, sorting them alphabetically
function build_query_string(parameters) {
    let query_string = '';
    for (let param_key of Object.keys(parameters).sort()) {
        query_string += encodeURIComponent(param_key) + '=' + encodeURIComponent(parameters[param_key]) + '&';
    }
    if (query_string.endsWith('&')) {
        query_string = query_string.slice(0, -1);
    }

    return query_string;
};

// Submit HTTP request to the server
function submit_request(http_method, api_host, request_path, query_string, payload) {
    let full_request_path = `${request_path}?${query_string}`;

    console.log(' --- URL:');
    console.log(`https://${api_host}${full_request_path}`);
    console.log();
    console.log(` --- Submitting ${http_method} request with payload:`);
    console.log(payload);
    console.log();

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

    let req = http.request(http_opts, (res) => {
        console.log(` --- Response Code: ${res.statusCode}`);

        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            console.log(' --- Response Body:');
            console.log(data);
            console.log();
            process.exit(0);
        });
    });
    req.on('error', (er) => {
        console.warn('HTTP Request Error', e);
        process.exit(1);
    });
    req.write(payload);
    req.end();
};

