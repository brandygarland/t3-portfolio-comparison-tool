const API_KEY = process.env.FINMASON_API_KEY
const SECRET_KEY = process.env.FINMASON_API_SECRET
const API_HOST = process.env.FINMASON_API_HOST


import * as cryptojs from 'crypto-js'

interface IFinMason {
    getSignatureParams: (httpMethod: string, apiPath: string, parameters: Object) => Object;

}

class FinMason implements IFinMason {
    public getSignatureParams = (httpMethod: string, apiPath: string, parameters: Object): Object => {
        const params = { ...parameters }
        params['timestamp'] = this.getTimestamp()
        params['fm_apikey'] = API_KEY
        this._requestPath = `/v2/${apiPath}`

        const canonicalRequest = this.buildCanonicalRequest(httpMethod, API_HOST, this._requestPath, params )

        params['signature'] = this.encodeSignature(this.computeSignature(canonicalRequest))
        

        return params
    }

    private _requestPath: string
    private _parameters: Object

    private getTimestamp = (): string => `${new Date().toISOString().slice(0, 19)}Z`

    private buildCanonicalRequest = (httpMethod, apiHost, requestPath, parameters): string => 
        `${httpMethod} \n ${apiHost} \n ${requestPath} \n ${this.buildQueryString(parameters)}`


    private buildQueryString = (params: Object): string => {
        let queryString = ''

        Object.keys(params).sort().map(param => 
            queryString += `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}&`    
        )
        return queryString
    }

    private computeSignature = (canonicalRequest) => cryptojs.HmacSHA256(canonicalRequest, SECRET_KEY)

    private encodeSignature = (signatureBytes): string => cryptojs.enc.Base64.stringify(signatureBytes)

}

export default new FinMason()