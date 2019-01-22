import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import { IAppState, IAsset, IPosition } from '../redux/store/templates/appState'
import { changeInputValue, triggerObservableAndChangeInputValue, chooseAsset, removePosition } from '../redux/actions/actionCreators'
import { Dispatch } from 'redux';

export interface IMapStateToPropsApp {
    appState: IAppState;

}

export interface IMapDispatchToPropsApp {
    routeToLogIn: () => void;
    routeToCompare: () => void;
    comparePortfolios: () => void;
    inputChange: (key: string , value: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    triggerObservableOnInputChange: (key: string , value: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    chooseAsset: (asset: IAsset) => () => void;
    removePosition: (postion: IPosition) => () => void;

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
            console.log('this should dispatch the analyze portfolio call.')
        },
        inputChange: (key: string , group: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(changeInputValue(key, group, event.target.value))
        },
        triggerObservableOnInputChange: (key: string , group: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            dispatch(changeInputValue(key, group, event.target.value))
            dispatch(triggerObservableAndChangeInputValue(key, group, event.target.value))
        },
        chooseAsset: (asset: IAsset) => () =>  {
            dispatch(chooseAsset(asset))
        },
        removePosition: (position: IPosition) => () =>  {
            dispatch(removePosition(position))
        },


    }
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedApp