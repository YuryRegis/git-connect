import { REMOVE_PAGE_TITLE, SET_PAGE_TITLE } from '../actions/types'


const initialState = {
    titles: []
}

export function Reducer(state=initialState, {type, payload}) {
    switch(type) {
        case SET_PAGE_TITLE:
            return {
                ...state,
                titles: [payload.title,...state.titles]
            }
        case REMOVE_PAGE_TITLE:
            const titles = state.titles.filter(title => title.thin !== payload.title.thin)
            return {
                ...state,
                titles: [...titles]
            }
        default:
            return {...state}
    }
}

export default Reducer