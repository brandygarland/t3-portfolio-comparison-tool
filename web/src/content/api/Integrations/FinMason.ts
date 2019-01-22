const API_KEY = process.env.FINMASON_API_KEY
const SECRET_KEY = process.env.FINMASON_API_SECRET
const API_HOST = process.env.FINMASON_API_HOST
const API_SIG_METHOD = 'HmacSHA256'
const API_SIG_VERSION = '2'


import * as cryptojs from 'crypto-js'

interface IFinMason {
    getSignatureParams: (httpMethod: string, apiPath: string, parameters: Object) => Object;
    getSignatureQueryString: (httpMethod: string, apiPath: string, parameters: Object) => string;

}

class FinMason implements IFinMason {
    public getSignatureParams = (httpMethod: string, apiPath: string, parameters: Object): Object => {
        const params = { ...parameters }
        params['timestamp'] = this.getTimestamp()
        params['fm_apikey'] = API_KEY
        params['signature_method'] = API_SIG_METHOD,
        params['signature_version'] = API_SIG_VERSION,
        this._requestPath = `/v2/${apiPath}`

        const canonicalRequest = this.buildCanonicalRequest(httpMethod, API_HOST, this._requestPath, params )

        params['signature'] = this.encodeSignature(this.computeSignature(canonicalRequest))
        

        return params
    }

    public getSignatureQueryString = (httpMethod: string, apiPath: string, parameters: Object): string =>
        `?${this.buildQueryString(this.getSignatureParams(httpMethod, apiPath, parameters))}`

    private _requestPath: string

    private getTimestamp = (): string => `${new Date().toISOString().slice(0, 19)}Z`

    private buildCanonicalRequest = (httpMethod, apiHost, requestPath, parameters): string => 
        `${httpMethod}\n${apiHost}\n${requestPath}\n${this.buildQueryString(parameters)}`


    private buildQueryString = (params: Object): string => {
        let queryString = ''

        Object.keys(params).sort().map(param => 
            queryString += `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}&`    
        )

        if (queryString.endsWith('&')) {
            queryString = queryString.slice(0, -1);
        }

        return queryString
    }

    private computeSignature = (canonicalRequest) => cryptojs.HmacSHA256(canonicalRequest, SECRET_KEY)

    private encodeSignature = (signatureBytes): string => cryptojs.enc.Base64.stringify(signatureBytes)

}

export default new FinMason()