import * as React from 'react'
import { Route, Switch } from 'react-router'
import { IApp } from './App'
import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import Compare from './components/Compare/Compare'

export interface IRoutesTypes extends IApp {
    
}

const Routes = (props: IRoutesTypes) => {
    return (
        <>
            <Switch>
                <Route 
                    exact={true}
                    path='/'
                    render={() => {
                        return(
                            <Homepage {...props} />
                        )}
                    }
                />
                <Route
                    exact={true}
                    path='/login'
                    render={() => {
                        return(
                            <Login {...props} />
                        )}
                    }
                />
                <Route
                    exact={true}
                    path='/compare'
                    render={() => {
                        return(
                            <Compare {...props} />
                        )}
                    }
                />
            </Switch>
        </>
    )
}

export default Routes