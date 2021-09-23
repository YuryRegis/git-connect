import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import titlesReducer from './reducers/titles'
import webViewReducer from './reducers/urlSources'
import lastUserReducer from './reducers/lastUserViwed.js'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


const reducers = combineReducers({
    user: userReducer,
    title: titlesReducer,
    webView: webViewReducer,
    lastUser: lastUserReducer
})

function store() {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default store