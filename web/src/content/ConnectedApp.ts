import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import { IAppState } from '../redux/store/templates/appState'
import { changeInputValue, triggerObservableAndChangeInputValue } from '../redux/actions/actionCreators'
import { Dispatch } from 'redux';

interface mapStateToPropsTypes {
    appState: IAppState;
}

export interface IMapStateToPropsApp {
    appState: IAppState;

}

export interface IMapDispatchToPropsApp {
    routeToLogIn: () => void;
    routeToCompare: () => void;
    comparePortfolios: () => void;
    analyzePortfolio: () => void;
    inputChange: (key: string , value: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    triggerObservableOnInputChange: (key: string , value: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

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
        analyzePortfolio: () => {

        },
        inputChange: (key: string , group: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(changeInputValue(key, group, event.target.value))
        },
        triggerObservableOnInputChange: (key: string , group: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(changeInputValue(key, group, event.target.value))
            dispatch(triggerObservableAndChangeInputValue(key, group, event.target.value))
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample