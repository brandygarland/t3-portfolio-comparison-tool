import {appState, IAppState} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
   AppActions 
} from '../actions/actionTypes'

export default (state: IAppState = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
            }
        }
        case AppActions.ChangeInputValue: {

            if (action.group === 'model-compare') {
                return {
                    ...state,
                    [action.key]: action.value,
                }
            } else if (action.group === 'positions-value') {
                const currentPositions = state.positions
                currentPositions[action.key].weight = action.value
                
                return {
                    ...state,
                    positions: currentPositions,
                }
            } else {
                return {
                    ...state,
                    inputs: {
                        ...state.inputs,
                        [action.key]: action.value
                    }
                }
            }
            
        }
        case AppActions.GetAssetsListSuccessful: {
            let value = [{name: 'Not Found'}]
            if (action.searchResults.assets) {
                value = action.searchResults.assets
            }
            return {
                ...state,
                assetList: value
            }
        }
        case AppActions.ChooseAsset: {
            let currentPositions = state.positions
            
            let formattedPosition = {
                ticker: action.asset.ticker,
                cusip: action.asset.cusip,
                isin: action.asset.isin,
                sedol: action.asset.sedol,
                weight: 0,
            }

            currentPositions.push(formattedPosition)

            return {
                ...state,
                inputs: appState.inputs,
                positions: currentPositions
            }
        }

        case AppActions.RemovePosition: {
            let currentPositions = state.positions
            let newPostions = currentPositions.filter(postion => 
                postion !== action.position
            )

            return {
                ...state,
                positions: newPostions
            }
        }
        default: {
            return state
        }
    }
}