import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import analyzePortfolio from '../epics/analyzePortfolio'
import getAssets from '../epics/getAssets'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,

})

export const rootEpic = combineEpics (
    analyzePortfolio, 
    getAssets
)