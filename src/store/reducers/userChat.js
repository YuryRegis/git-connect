import { SET_USER_CHAT } from "../actions/types"


const initialState = {
    props: {}
}


export function Reducer (state=initialState, {type, payload}) {
    switch (type) {
        case SET_USER_CHAT:
            return { props: {...payload} }
        default:
            return {...state}
    }
}


export default Reducer