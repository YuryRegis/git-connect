import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import webViewReducer from './reducers/urlSources'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


const reducers = combineReducers({
    user: userReducer,
    webView: webViewReducer
})

function store() {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default store