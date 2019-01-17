import * as React from 'react'

import Routes from './Routes'
import { AppStateTypes } from '../redux/store/templates/appState'
import { IMapDispatchToPropsApp, IMapStateToPropsApp } from './ConnectedApp';
import Header from './components/Header/Header'

export interface IApp extends IMapDispatchToPropsApp, IMapStateToPropsApp {
    
}

const App = (props: IApp) => {
    return (
        <div className="App">
            <Header />
            <Routes {...props}/>
        </div>
    )
}

export default App
