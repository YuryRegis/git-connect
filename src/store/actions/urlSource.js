import {SET_URL_SOURCE} from './types'



export function setUrlWebView(url) {
  return {
    type: SET_URL_SOURCE,
    payload: {
        webViewURL: url,
    }
  }
}