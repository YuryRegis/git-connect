import { SET_LAST_USER_VIEWED } from './types'


export const setLastUserViewed = (user) => {
    return (dispatch) => dispatch({
            type: SET_LAST_USER_VIEWED,
            payload: {user: user}
        })
}