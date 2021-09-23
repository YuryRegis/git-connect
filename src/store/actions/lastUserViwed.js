import { SET_LAST_USER_VIEWED,
      REMOVE_LAST_USER_VIEWED } from './types'


export const setLastUserViewed = (user) => {
    return (dispatch) => dispatch({
            type: SET_LAST_USER_VIEWED,
            payload: {user: user}
        })
}

export const removeLastUserViewed = (user) => {
    return (dispatch) => dispatch({
            type: REMOVE_LAST_USER_VIEWED,
            payload: {user: user}
        })
}