import { Observable } from 'rxjs'
import { AxiosRequestConfig } from 'axios'
import { Rxios } from 'rxios'
import FinMason from './Integrations/FinMason'
import { HttpClient } from './HttpClient'

const rxios = new Rxios({
    url: '/repeater',
})

type HttpsConfig = {
    hostname: string;
    path: string;
    method: 'POST' | 'GET';
}

class HttpsFinMasonRepeaterClient extends HttpClient {
    private hostname = process.env.FINMASON_API_HOST
    private version = '/v2/'
    
    constructor(rxios: Rxios) {
        super(rxios)
    }

    get = <T>(url: string, queryParams?: Object): Observable<T> =>
        this._httpClient.request({
            params: {
                config: JSON.stringify({
                    hostname: this.hostname,
                    path: this.version+url+FinMason.getSignatureQueryString('GET', url, queryParams),
                    method: "GET",
                } as HttpsConfig)
            }
        })
    
    post = <T>(url: string, queryParams?: Object): Observable<T> => 
        this._httpClient.request({
            params: {
                config: JSON.stringify({
                    hostname: this.hostname,
                    path: this.version+url+FinMason.getSignatureQueryString('POST', url, queryParams),
                    method: "POST",
                } as HttpsConfig)
            }
        })
}

export default new HttpsFinMasonRepeaterClient(rxios)