import {SET_LAST_USER_VIEWED,
     REMOVE_LAST_USER_VIEWED} from '../actions/types'


const initialState = {
    lastUserViewed: []
}


export function Reducer (state=initialState, {type, payload}) {
    switch (type) {
        case SET_LAST_USER_VIEWED:
            return {
                lastUserViewed: [payload.user, 
                    ...state.lastUserViewed],
            }
        case REMOVE_LAST_USER_VIEWED:
            const newState = state.lastUserViewed.filter(user => user.id !== payload.user.id)
            return {
                lastUserViewed: [...newState]
            }
        default:
            return {...state}
    }
}

export default Reducer