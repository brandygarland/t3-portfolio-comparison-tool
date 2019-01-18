import { IPortfolioAnalyze } from "../../../redux/actions/actionCreators"
import { Observable } from "rxjs";
import httpClient from "../HttpClient";

interface IPortfolio {}

interface IPortfolioWithStats {}

interface IAssetsReturned {}

export interface IFinMasonService {
    analyzePortfolio: (portfolio: IPortfolio) => Observable<IPortfolioWithStats>;
    getAssets: (query: string) => Observable<IAssetsReturned>;

}

class FinMasonService implements IFinMasonService {
    analyzePortfolio = (portfolio: IPortfolio) => 
        httpClient.post<IPortfolioWithStats>(this.analyzePortfolioUrl(), portfolio)

    getAssets = (query: string) => 
        httpClient.get<IAssetsReturned>(this.getAssetsUrl(), { ticker: query })

    private analyzePortfolioUrl = () => `portfolio/analyze`

    private getAssetsUrl = () => `assets/search`



}

export default new FinMasonService()