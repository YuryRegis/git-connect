import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import {TouchableOpacity} from 'react-native'
import { logout } from '../../store/actions/user'


function Header(props){

    function logoutHandler() {
        props.onLogout()
    }

    return (
        <styled.Container>
          <styled.RowContainer justify='space-between'>

            <styled.RowContainer padding={16} justify='flex-start'>
                <TouchableOpacity onPress={()=>{}}>
                    <styled.Icon size={23} name='logo-github'/>
                </TouchableOpacity>

                <styled.LogoTextContainer>
                    <styled.LogoLabelStrong>Git</styled.LogoLabelStrong>
                    <styled.LogoLabelThin>Connect</styled.LogoLabelThin>
                </styled.LogoTextContainer>
            </styled.RowContainer>

            {props.logout && (
                <styled.RowContainer padding={16} justify='flex-end'>
                    <TouchableOpacity onPress={logoutHandler}>
                        <styled.LogoutText>Logout</styled.LogoutText>
                    </TouchableOpacity>
                </styled.RowContainer>
            )}

          </styled.RowContainer>
        </styled.Container>  
    )
}

function mapDispatchToProps(Dispatch) {
    return {
        onLogout: () => Dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(Header)