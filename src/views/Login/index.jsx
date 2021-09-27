import * as styled from './style'
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/actions/user'
import { ActivityIndicator } from 'react-native'
import GradientButton from '../../components/GradientButton'
import MaskedGradient from '../../components/MaskedGradient'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'



function AnimatedCursor({inputValue}) {
    return <LottieView 
        source={require('../../../assets/lottie/lf30_editor_cursor.json')} 
        style={[styled.AnimatedCursor,
             {opacity: inputValue==='' ? 1 : 0}]}
        autoPlay loop />
}


function AnimatedLogo() {
    return (
        <LinearGradient 
            style={styled.AnimateLogo}
            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
            colors={[styled.primaryColor, styled.secondaryColor]}
        >
            <LottieView source={require('../../../assets/lottie/lf30_editor_1jth40fm.json')} 
                style={[styled.AnimateLogoView]}
                autoPlay loop />
        </LinearGradient>
    )
}

function Login(props) {
    const [input, setInput] = useState('')
    const [placeholder, setPlaceholder] = useState('GitHub Username')

    function gradientButtonHandler() {
        props.onLogin({login: input})
    }

    return (
        <styled.Container>

            {/* <MaskedGradient size={{h: 250, w:250}}>
              <styled.LogoIcon name='logo-github' size={250}/>
            </MaskedGradient>  */}

            <AnimatedLogo />
            
            <styled.RowContainer>

                  <styled.LogoTextBold>Git</styled.LogoTextBold>
                  <styled.LogoText>Connect</styled.LogoText>

            </styled.RowContainer>

            <styled.InputContainer>
                <AnimatedCursor inputValue={input}/>
                <styled.Input 
                    onChangeText={(text) => setInput(text)}
                    placeholder={placeholder}
                    onFocus={() => setPlaceholder('')}
                    placeholderTextColor={styled.placeHolderColor}
                    // onBlur={() => placeholder==='' && setPlaceholder('GitHub Username')}    
                />

                <GradientButton onPress={gradientButtonHandler}>
                    <styled.ButtonContainer>
                        <styled.ButtonText> ENTRAR </styled.ButtonText>
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