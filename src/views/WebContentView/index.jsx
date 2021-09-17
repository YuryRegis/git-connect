import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import HeaderNav from '../../components/HeaderNav'


export function WebView({source, ...rest}) {
    return (
        <styled.container>
            <HeaderNav {...rest}/>

            <styled.WebViewContent
                source={{uri: source}}
                {...rest}
            />
        </styled.container>
    )
}

function mapStateToProps(state) {
    return {
        source: state.webView.webViewURL
    }
}

export default connect(mapStateToProps,null)(WebView)