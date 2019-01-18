import { IPortfolioAnalyze } from "../../../redux/actions/actionCreators"
import { Observable } from "rxjs";
import httpClient from "../HttpClient";

interface IPortfolio {}

interface IPortfolioWithStats {}

interface IAssetsReturned {}

export interface IFinMasonService {
    analyzePortfolio: (portfolio: IPortfolio) => Observable<IPortfolioWithStats>;
    searchAssetByTicker: (query: string) => Observable<IAssetsReturned>;

}

export default class FinMasonService implements IFinMasonService {
    analyzePortfolio = (portfolio: IPortfolio) => 
        httpClient.post<IPortfolioWithStats>(this.analyzePortfolioUrl(), portfolio)

    searchAssetByTicker = (query: string) => 
        httpClient.get<IAssetsReturned>(this.getAssetsUrl(), {query})

    private analyzePortfolioUrl = () => `portfolio/analyze`

    private getAssetsUrl = () => `assets/search`



}