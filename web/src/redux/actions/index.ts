import { AppActions } from './actionTypes'


export const changeInputValue = (key, group, value) => {
    return ({type: AppActions.ChangeInputValue, key, group, value})
}


export const triggerObservableAndChangeInputValue = (key, group, value) => {
    if (group === 'model-creation' && key === 'symbol-search' && value.length > 1) {
        return ({type: AppActions.GetAssetsList, key, group, value})
    } else {
        return null
    }

}
