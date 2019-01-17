import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'


export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,

})

export const rootEpic = combineEpics (
    
)