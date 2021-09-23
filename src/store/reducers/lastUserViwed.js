import {SET_LAST_USER_VIEWED} from '../actions/types'


const initialState = {
    lastUserViewed: {}
}


export function Reducer (state=initialState, {type, payload}) {
    switch (type) {
        case SET_LAST_USER_VIEWED:
            return {
                lastUserViewed: {...payload.user}
            }
        default:
            return {...state}
    }
}

export default Reducer