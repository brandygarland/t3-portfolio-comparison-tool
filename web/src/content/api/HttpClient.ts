import { Observable } from 'rxjs'
import { AxiosRequestConfig } from 'axios'
import { Rxios } from 'rxios'
import FinMason from './Integrations/FinMason'

const rxios = new Rxios({
    baseURL: 'https://' + process.env.FINMASON_API_HOST + '/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
})

interface IHttpClient {
    get<T>(url: string, queryParams?: Object): Observable<T>;
    post<T>(url: string, body: Object, queryParams?: Object): Observable<T>;
}

export class HttpClient implements IHttpClient {
    constructor(rxios: Rxios) {
        this._httpClient = rxios
    }

    protected _httpClient: Rxios

    get = <T>(url: string, queryParams?: Object): Observable<T> =>
        this._httpClient.request({
            url, 
            params: {
                ...FinMason.getSignatureParams('GET', url, queryParams)
            },
            method: "GET",
        } as AxiosRequestConfig)
    
    post = <T>(url: string, queryParams?: Object): Observable<T> => 
        this._httpClient.request({
            url, 
            params: {
                ...FinMason.getSignatureParams('POST', url, queryParams)
            },
            method: "POST",
        } as AxiosRequestConfig)

}

export default new HttpClient(rxios)