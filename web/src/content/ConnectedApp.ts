import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {AppStateTypes} from '../redux/store/templates/appState'
import { changeInputValue } from '../redux/actions/index'
import { Dispatch } from 'redux';

interface mapStateToPropsTypes {
    appState: AppStateTypes;
}

export interface IMapStateToPropsApp {
    appState: AppStateTypes;

}

export interface IMapDispatchToPropsApp {
    routeToLogIn: () => void;
    routeToCompare: () => void;
    comparePortfolios: () => void;
    inputChange: (key: string , value: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const mapStateToProps = (state: IMapStateToPropsApp, ownProps) =>  {
    return {
        appState: state.appState
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps): IMapDispatchToPropsApp => {
    return {
        routeToLogIn: () => {
            dispatch(push('/login'))
        },
        routeToCompare: () => {
            dispatch(push('/compare'))
        },
        comparePortfolios: () => {
            console.log('comparing....')
        },
        inputChange: (key: string , group: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(changeInputValue(key, group, event.target.value))
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample