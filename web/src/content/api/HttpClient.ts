import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { Rxios } from 'rxios'

const rxios = new Rxios({
    baseURL: process.env.FINMASON_API_HOST,
    headers: {
        "Content-Type": 'application/json'
    },
})

interface IHttpClient {
    get<T>(url: string, queryParams?: Object): Observable<T>;
    post<T>(url: string, body: Object, queryParams?: Object): Observable<T>;
}

class HttpClient implements IHttpClient {
    constructor(rxios: Rxios) {
        this._httpClient = rxios
    }

    private _httpClient: Rxios

    get = <T>(url: string, queryParams?: Object): Observable<T> =>
        this._httpClient.request({
            url, 
            params: {
                signature: "FinMason.getSignature()", 
                
            },
            method: "GET",
        } as AxiosRequestConfig)
    
    post = <T>(url: string, queryParams?: Object): Observable<T> => 
        this._httpClient.request({
            url, 
            params: {
                signature: "GET FROM FM", 
                
            },
            method: "POST",
        } as AxiosRequestConfig)

}