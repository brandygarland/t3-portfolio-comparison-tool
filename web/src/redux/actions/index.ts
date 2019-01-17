import {
    SLIDE_BOX,
    SPIN_LOGO_CHANGE,
    CHANGE_INPUT_VALUE,
    FETCH_SAMPLE
} from './actionTypes'

export const slideBox = () => {
    return ({type: SLIDE_BOX})
}

export const spinLogoChange = () => {
    return (dispatch, getState) => {
        const spinChange = !(getState().appState.spinLogo)
        dispatch({type: SPIN_LOGO_CHANGE, spinChange})
    }
}

export const changeInputValue = (key, group, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, group, value})
}

export const fetchSampleData = () => {
    return({type: FETCH_SAMPLE})
}