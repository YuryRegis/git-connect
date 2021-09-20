import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import HeaderNav from "../../components/HeaderNav"


export function Conversation(props) {
    return (
        <styled.Container>
            <HeaderNav />
        </styled.Container>
    )
}



export default connect(null,null)(Conversation)