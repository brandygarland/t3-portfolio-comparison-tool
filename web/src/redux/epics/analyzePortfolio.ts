import { Epic } from 'redux-observable'
import { AppActions } from '../actions/actionTypes'
import { Observable } from 'rxjs'
import { IRootState } from '../reducers/IRootState';
import { IPortfolioAnalyze } from '../actions/actionCreators';
import FinMasonService from '../../content/api/Integrations/FinMasonService';

// // const analyzePortfolio: Epic <
// // IPortfolioAnalyze,
// // any,
// // IRootState>
// const analyzePortfolio
// = (action$, state$) => 
//     action$.pipe(ofType(AppActions.AnalyzePortfolio)
//         switchMap(() => {
//             FinMasonService.analyzePortfolio({
//                 ...state$.value.appState.portfolio
//             }).mergeMap(response => Observable.of(
//                 {type: AppActions.AnalyzePortfolioSuccessful, analyzedPortfolio: response}
//             )).catch(error => Observable.of(
//                 {type: AppActions.AnalyzePortfolioFailed}
//             ))
//         })
//     )

// export default analyzePortfolio