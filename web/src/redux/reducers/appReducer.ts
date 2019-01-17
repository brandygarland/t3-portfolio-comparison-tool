import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
    CHANGE_INPUT_VALUE, 
    FETCH_SAMPLE, 
    FETCH_SAMPLE_FAILED, 
    FETCH_SAMPLE_SUCCESSFUL,
    SLIDE_BOX, 
    SPIN_LOGO_CHANGE, 
    STOP_BOX,
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
        case SLIDE_BOX: {
            return {
                ...state,
                moveBox: true,
            }
        }
        case STOP_BOX: {
            return {
                ...state,
                moveBox: false,
            }
        }
        case SPIN_LOGO_CHANGE: {
            return {
                ...state,
                spinLogo: action.spinChange
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.key]: action.value
                }
            }
        }
        case FETCH_SAMPLE: {
            return {
                ...state, 
                isSearching: true,
                sampleDataError: false,
                sampleData: null,
            }
        }
        case FETCH_SAMPLE_SUCCESSFUL: {
            return {
                ...state, 
                isSearching: false,
                sampleDataError: false,
                sampleData: action.sampleData,
            }
        }
        case FETCH_SAMPLE_FAILED: {
            return {
                ...state, 
                isSearching: false,
                sampleDataError: true,
                sampleData: null,
            }
        }
        default: {
            return state
        }
    }
}