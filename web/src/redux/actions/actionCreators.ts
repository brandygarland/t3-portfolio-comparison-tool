import { AppActions } from './actionTypes'
import { Action } from 'redux'

export interface IPortfolioAnalyze extends Action<AppActions.AnalyzePortfolio> {}
export interface IPortfolioAnalyzeSuccessful extends Action<AppActions.AnalyzePortfolioSuccessful> {
    analyzedPortfolio: any;
}
export interface IPortfolioAnalyzeFailed extends Action<AppActions.AnalyzePortfolioFailed> {}

export const analyzePortfolio = (): IPortfolioAnalyze => {
    return ({type: AppActions.AnalyzePortfolio})
}

export const changeInputValue = (key, group, value) => {
    return ({type: AppActions.ChangeInputValue, key, group, value})
}


export const triggerObservableAndChangeInputValue = (key, group, value) => {
    if (group === 'model-creation' && key === 'symbolSearch' && value.length > 1) {
        return ({type: AppActions.GetAssetsList, key, group, value})
    } 

}
