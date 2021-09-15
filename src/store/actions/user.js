import {LOGIN, LOGOUT} from './types'



export function login(user) {
  return {
    type: LOGIN,
    payload: {
        isAuthenticated: true,
    }
  }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: {}
    }
}