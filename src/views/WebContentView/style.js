import styled from 'styled-components'
import WebView from 'react-native-webview'
import Theme from '../../../assets/style/global'


export const container = styled.View`
    flex: 1;
    background-color: ${Theme.background};
`

export const WebViewContent = styled(WebView)`
    flex: 1;
`
