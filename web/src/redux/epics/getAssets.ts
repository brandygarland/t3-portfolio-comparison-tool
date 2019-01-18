import { Epic, ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { AppActions } from '../actions/actionTypes'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/of'
import 'rxjs/add/operator/catch';
import { IRootState } from '../reducers/IRootState';
import { IPortfolioAnalyze, IGetAssets } from '../actions/actionCreators';
import FinMasonService from '../../content/api/Integrations/FinMasonService';

const getAssets: Epic <
IGetAssets,
any,
IRootState>
= (action$, state$) => 
    action$.pipe(ofType(AppActions.GetAssetsList),
        switchMap(() => 
            FinMasonService.getAssets(
                state$.value.appState.inputs.symbolSearch,
            ).mergeMap(response => of(
                {type: AppActions.GetAssetsListSuccessful, analyzedPortfolio: response}
            )).catch(error => of(
                {type: AppActions.GetAssetsListFailed}
            ))
        )
    )

export default getAssets