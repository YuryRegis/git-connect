import {SET_USER_CHAT} from './types'


export function setUserChat(userChat) {
  return {
    type: SET_USER_CHAT,
    payload: userChat
  }
}


export default setUserChat