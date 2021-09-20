import * as styled from './style'
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/actions/user'
import { ActivityIndicator } from 'react-native'
import GradientButton from '../../components/GradientButton'
import MaskedGradient from '../../components/MaskedGradient'


function Login(props) {
    const [input, setInput] = useState('')

    function gradientButtonHandler() {
        props.onLogin({login: input})
    }

    return (
        <styled.Container>

            <MaskedGradient size={{h: 250, w:250}}>
              <styled.LogoIcon name='logo-github' size={250}/>
            </MaskedGradient> 
            
            <styled.RowContainer>
                {/* <MaskedGradient size={{h:50, w:55}}> */}
                  <styled.LogoTextBold>Git</styled.LogoTextBold>
                {/* </MaskedGradient> */}
                <styled.LogoText>Connect</styled.LogoText>
            </styled.RowContainer>

            <styled.InputContainer>
                <styled.Input 
                    onChangeText={(text) => setInput(text)}
                    placeholder='GitHub Username'
                    placeholderTextColor={styled.placeHolderColor}/>

                <GradientButton onPress={gradientButtonHandler}>
                    <styled.ButtonContainer>
                        <styled.ButtonText> Sign In </styled.ButtonText>
                    </styled.ButtonContainer>
                </GradientButton>
            </styled.InputContainer>

            {props.user.isLoading && <>
                <styled.AbsoluteContainer>
                    <ActivityIndicator size="large" color="#A370F7" />
                </styled.AbsoluteContainer>
            </>}

        </styled.Container>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        onLogin: (username) => dispatch(login(username))
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)