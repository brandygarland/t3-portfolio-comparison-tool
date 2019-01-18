import {appState, IAppState} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
   AppActions 
} from '../actions/actionTypes'
import { chooseAsset } from '../actions/actionCreators';

export default (state: IAppState = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                showNavigateButton: action.payload.pathname === '/',
                moveBox: false,
                isSearching: false,
                sampleData: null,
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
                currentPositions[action.key].value = action.value
                
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
        default: {
            return state
        }
    }
}