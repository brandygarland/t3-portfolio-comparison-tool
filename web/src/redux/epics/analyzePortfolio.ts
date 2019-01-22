import { Epic, ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AppActions } from '../actions/actionTypes'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import { IRootState } from '../reducers/IRootState'
import { IPortfolioAnalyze, IPortfolioAnalyzeSuccessful, IPortfolioAnalyzeFailed } from '../actions/actionCreators'
import FinMasonService from '../../content/api/Integrations/FinMasonService'

const analyzePortfolio: Epic <
IPortfolioAnalyze,
any,
IRootState>
= (action$, state$) => 
    action$.pipe(ofType(AppActions.AnalyzePortfolio),
        switchMap(() => 
            FinMasonService.analyzePortfolio({
                positions: [...state$.value.appState.positions],
                portfolio_stats: ['finscore', 'sharpe_hyb_fb_20yr', 'asset_class']
            }).mergeMap(response => of(
                {type: AppActions.AnalyzePortfolioSuccessful, analyzedPortfolio: response} as IPortfolioAnalyzeSuccessful
            )).catch(error => of(
                {type: AppActions.AnalyzePortfolioFailed} as IPortfolioAnalyzeFailed
            ))
        )
    )

export default analyzePortfolio