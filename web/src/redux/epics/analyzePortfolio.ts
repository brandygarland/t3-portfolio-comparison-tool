import { Epic, ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AppActions } from '../actions/actionTypes'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import { IRootState } from '../reducers/IRootState'
import { IPortfolioAnalyze, IPortfolioAnalyzeSuccessful, IPortfolioAnalyzeFailed } from '../actions/actionCreators'
import FinMasonService from '../../content/api/Integrations/FinMasonService'
import { portfolioStats } from '../../content/businessLogic/portfolioStats'

const analyzePortfolio: Epic <
IPortfolioAnalyze,
any,
IRootState>
= (action$, state$) => 
    action$.pipe(ofType(AppActions.AnalyzePortfolio), switchMap(() => {
        const positionsWithDecimalVals = [...state$.value.appState.positions]

        positionsWithDecimalVals.forEach(position => {
                position.weight = position.value / 100
                position.quantity = position.value 
        })

        return FinMasonService.analyzePortfolio({
            positions: [...positionsWithDecimalVals],
            portfolio_stats: portfolioStats,
        }).mergeMap(response => of(
            {type: AppActions.AnalyzePortfolioSuccessful, analyzedPortfolio: response} as IPortfolioAnalyzeSuccessful
        )).catch(error => of(
            {type: AppActions.AnalyzePortfolioFailed} as IPortfolioAnalyzeFailed
        ))
    })
    )

export default analyzePortfolio