import { IPortfolioAnalyze } from "../../../redux/actions/actionCreators"
import { Observable } from "rxjs";
import httpClient from "../FinMasonRepeaterClient";

interface IPortfolio {}

interface IPortfolioWithStats {}

interface IAssetsReturned {}

export interface IFinMasonService {
    analyzePortfolio: (portfolio: IPortfolio) => Observable<IPortfolioWithStats>;
    getAssets: (query: string, instrument: string) => Observable<IAssetsReturned>;

}

class FinMasonService implements IFinMasonService {
    analyzePortfolio = (portfolio: IPortfolio) => 
        httpClient.post<IPortfolioWithStats>(this.analyzePortfolioUrl(), portfolio)

    getAssets = (query: string, instrument: string) => {
        let params = {
            ticker: query, 
            max: 100,
        }

        if (instrument !== '') {
            params['instrument'] = instrument
        }
        return httpClient.get<IAssetsReturned>(this.getAssetsUrl(), params)
    }
        
    private analyzePortfolioUrl = () => `portfolio/analyze`

    private getAssetsUrl = () => `asset/list`

}

export default new FinMasonService()