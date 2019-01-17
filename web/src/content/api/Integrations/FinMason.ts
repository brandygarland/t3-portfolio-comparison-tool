const API_KEY = process.env.FINMASON_API_KEY
const SECRET_KEY = process.env.FINMASON_API_SECRET
const API_HOST = process.env.FINMASON_API_HOST
const SIGNATURE_METHOD = "HmacSHA256"
const SIGNATURE_VERSION = "2"

interface IFinMason {
    getSignature: () => string;
    getSignatureParams: () => string ;

}

export class FinMason implements IFinMason {
    constructor(httpMethod: string, apiPath: string, parameters: Object) {
        this._requestPath = `/v2/${apiPath}`
    }
    
    private _requestPath: string;

    public getSignature = (): string => {
        return ""
    }

    public getSignatureParams = (): string => {
        return ""
    }

    private buildQueryString 



}
