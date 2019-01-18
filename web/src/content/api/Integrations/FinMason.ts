const API_KEY = process.env.FINMASON_API_KEY
const SECRET_KEY = process.env.FINMASON_API_SECRET
const API_HOST = process.env.FINMASON_API_HOST
const SIGNATURE_METHOD = "HmacSHA256"
const SIGNATURE_VERSION = "2"

interface IFinMason {
    getSignature: (httpMethod: string, apiPath: string, parameters: Object) => string;
    getSignatureParams: (httpMethod: string, apiPath: string, parameters: Object) => Object;

}

class FinMason implements IFinMason {
    private _requestPath: string;

    public getSignature = (httpMethod: string, apiPath: string, parameters: Object): string => {
        this._requestPath = `/v2/${apiPath}`
        return ""
    }

    public getSignatureParams = (httpMethod: string, apiPath: string, parameters: Object): Object => {
        this._requestPath = `/v2/${apiPath}`
        return {
            
        }
    }

    private buildQueryString 



}

export default new FinMason()