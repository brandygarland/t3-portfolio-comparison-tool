import { Observable } from 'rxjs'
import { AxiosRequestConfig } from 'axios'
import { Rxios } from 'rxios'
import FinMason from './Integrations/FinMason'
import { HttpClient } from './HttpClient'

const rxios = new Rxios({
    url: '/repeater',
})

class FinMasonRepeaterClient extends HttpClient {
    private baseURL = 'https://' + process.env.FINMASON_API_HOST + '/v2/'
    
    constructor(rxios: Rxios) {
        super(rxios)
    }

    get = <T>(url: string, queryParams?: Object): Observable<T> =>
        this._httpClient.request({
            params: {
                config: JSON.stringify({
                    url: this.baseURL+url, 
                    params: {
                        ...FinMason.getSignatureParams('GET', url, queryParams)
                    },
                    method: "GET",
                } as AxiosRequestConfig)
            }
        })
    
    post = <T>(url: string, queryParams?: Object): Observable<T> => 
        this._httpClient.request({
            params: {
                config: JSON.stringify({
                    url: this.baseURL+url, 
                    params: {
                        ...FinMason.getSignatureParams('POST', url, queryParams)
                    },
                    method: "POST",
                } as AxiosRequestConfig)
            }
        })
}

export default new FinMasonRepeaterClient(rxios)