import { Epic, ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AppActions } from '../actions/actionTypes'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import { IRootState } from '../reducers/IRootState'
import { IGetAssets, IGetAssetsSuccessful, IGetAssetsFailed } from '../actions/actionCreators'
import FinMasonService from '../../content/api/Integrations/FinMasonService'

const getAssets: Epic <
IGetAssets,
any,
IRootState>
= (action$, state$) => 
    action$.pipe(ofType(AppActions.GetAssetsList), switchMap(() => 
        FinMasonService.getAssets(
            state$.value.appState.inputs.symbolSearch,
            state$.value.appState.inputs.chosenInstrument || '',
        ).mergeMap(response => of(
            {type: AppActions.GetAssetsListSuccessful, searchResults: response} as IGetAssetsSuccessful,
        )).catch(error => of(
            {type: AppActions.GetAssetsListFailed} as IGetAssetsFailed,
        ))
    )
    )

export default getAssets