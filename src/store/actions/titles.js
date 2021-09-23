import { SET_PAGE_TITLE } from './types'
import { REMOVE_PAGE_TITLE } from './types'


export function setPageTitle(title) {
    return dispatch => dispatch({
        type: SET_PAGE_TITLE,
        payload: {
            title: title
        }
    })
}

export function removePageTitle(title) {
    return dispatch => dispatch ({
        type: REMOVE_PAGE_TITLE,
        payload: {
            title: title
        }
    })
}