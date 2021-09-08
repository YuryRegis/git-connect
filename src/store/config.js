import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


const reducers = combineReducers({})

function store() {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default store