import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import HeaderNav from "../../components/HeaderNav"


export function Conversation(props) {
    return (
        <styled.Container>
            <HeaderNav {...props}/>
        </styled.Container>
    )
}



export default connect(null,null)(Conversation)