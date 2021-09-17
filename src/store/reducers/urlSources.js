import {SET_URL_SOURCE} from '../actions/types'


const initialState = {
    webViewURL: 'https://www.github.com/YuryRegis',
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_URL_SOURCE:
            return {
                ...state,
                webViewURL: action.payload.webViewURL,
            }
        default:
            return {...state}
    }
}

export default Reducer