import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


const reducers = combineReducers({
    user: userReducer,
})

function store() {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default store