import { AppActions } from './actionTypes'
import { Action } from 'redux'
import { IAsset } from '../store/templates/appState';

export interface IPortfolioAnalyze extends Action<AppActions.AnalyzePortfolio> {}
export interface IPortfolioAnalyzeSuccessful extends Action<AppActions.AnalyzePortfolioSuccessful> {
    analyzedPortfolio: any;
}
export interface IPortfolioAnalyzeFailed extends Action<AppActions.AnalyzePortfolioFailed> {}

export const analyzePortfolio = (): IPortfolioAnalyze => {
    return ({type: AppActions.AnalyzePortfolio})
}


export interface IGetAssets extends Action<AppActions.GetAssetsList> {}
export interface IGetAssetsSuccessful extends Action<AppActions.GetAssetsListSuccessful> {
    analyzedPortfolio: any;
}
export interface IGetAssetsFailed extends Action<AppActions.GetAssetsListFailed> {}


export const getAssets = (): IGetAssets => {
    return ({type: AppActions.GetAssetsList})
}




export const changeInputValue = (key, group, value) => {
    return ({type: AppActions.ChangeInputValue, key, group, value})
}


export const triggerObservableAndChangeInputValue = (key, group, value) => {
    if (group === 'model-creation' && key === 'symbolSearch' && value.length > 1) {
        return ({type: AppActions.GetAssetsList, key, group, value})
    } 
    else {
        return ({type: null})
    }

}

export const chooseAsset = (asset: IAsset) => {
    return ({type: AppActions.ChooseAsset, asset})
}
