import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import HeaderNav from "../../components/HeaderNav"


export function Chat({navigation}) {
    return (
        <styled.Container>
            <HeaderNav />
        </styled.Container>
    )
}



export default connect(null,null)(Chat)