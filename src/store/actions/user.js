import * as api from '../../api'
import {ToastAndroid} from 'react-native'
import {LOGIN, LOGOUT, SET_LOADING, SET_AUTH} from './types'
import {SET_USER_REPOS, SET_USER_FOLLOWERS, SET_USER_FOLLOWING} from '../actions/types'


function ToastMessage(message) {
    return ToastAndroid.show(message, ToastAndroid.LONG)
}

export function login(user) {
  return async dispatch => {
    dispatch({type: SET_LOADING, payload: {isLoading: true}})
    
    const userData = await api.getUserInfo(user.login)
    if (userData.status >= 400) {
      ToastMessage(userData.message)
      dispatch({type: SET_LOADING, payload: {isLoading: false}})
      return
    }
    await dispatch({ type: LOGIN, payload: userData.data })
    
    const userRepos = await api.getUserRepos(user.login)
    await dispatch({ type: SET_USER_REPOS, payload: {repos: {nodes: userRepos.data}} })

    const userFollowers = await api.getUserFollowers(user.login)
    await dispatch({ type: SET_USER_FOLLOWERS, payload: {followers: {nodes: userFollowers}} })

    const userFollowing = await api.getUserFollowing(user.login)
    await dispatch({ type: SET_USER_FOLLOWING, payload: {following: {nodes: userFollowing}} })

    await dispatch({ type: SET_LOADING, payload: {isLoading: false} })
    await dispatch({ type: SET_AUTH, payload: {isAuthenticated: true} })
  }
}


export function fetchUserRepos(userName) {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: {isLoading: true}
    })
    api.getUserRepos(userName)
      .then( response => {
        // console.log('REPOSITORIES ', response)
          dispatch({
            type: SET_USER_REPOS,
            payload: {repos: {nodes: response}}
          })
        }
    )
  }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: {}
    }
}