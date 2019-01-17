import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
   AppActions 
} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
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