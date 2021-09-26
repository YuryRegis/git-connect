import React from 'react'
import * as styled from './style'
import LottieView from 'lottie-react-native'
import { LinearGradient } from 'expo-linear-gradient'


function FrontCard() {
    return(
    //   <styled.CardView>
  
            <LinearGradient 
                      style={styled.GradientStyle}
                      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                      colors={[styled.primaryColor, styled.secondaryColor] }
                  >
              <styled.CardContainer>
                <styled.AvatarContent>
                  <LottieView source={require('../../../assets/lottie/lottieBorderAnimated.json')} 
                    style={{
                        height: 187,
                        width: 187,
                        marginRight: '.5%',
                        marginBottom: '.5%',
                    }} 
                    autoPlay loop />
  
                  <styled.Avatar source={require('../../../assets/img/profile.jpg')}/>
                </styled.AvatarContent>
  
                <LottieView source={require('../../../assets/lottie/aboutMe.json')} 
                    style={{
                        height: 'auto',
                        width: 150,
                        marginTop: '3%',
                      }} 
                    autoPlay loop={false}/>  
              
              </styled.CardContainer>
            </LinearGradient>
  
        //   </styled.CardView>
    )
  }

export default FrontCard