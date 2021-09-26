import React from 'react'
import * as styled from './style'
import { LinearGradient } from 'expo-linear-gradient'


function FrontCard() {
    return(
    //   <styled.CardView>
  
            <LinearGradient 
                      style={styled.GradientStyle}
                      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                      colors={[styled.primaryColor, styled.secondaryColor] }
                  >
              <styled.CardContainer back>
                
                <styled.BackRowContent>
                  <styled.View>

                    <styled.BackAvatar source={require('../../../assets/img/profile.jpg')}/>
                    <styled.Row>
                      <styled.ThinName>YuryRegis</styled.ThinName>
                      <styled.BoldName>Harry</styled.BoldName>
                    </styled.Row>

                  </styled.View>
                </styled.BackRowContent>

                <styled.InfoContent>

                  <styled.Row>
                    <styled.BoldText>Cargo:</styled.BoldText>
                    <styled.ThinText>Front-end developer</styled.ThinText>
                  </styled.Row>

                  <styled.Row>
                    <styled.BoldText>iStudio:</styled.BoldText>
                    <styled.ThinText>Mobile Apps - BH</styled.ThinText>
                  </styled.Row>

                  <styled.Row>
                    <styled.BoldText>Tecnologia:</styled.BoldText>
                    <styled.ThinText>React-Native</styled.ThinText>
                  </styled.Row>

                  <styled.Row>
                    <styled.BoldText>Nível:</styled.BoldText>
                    <styled.ThinText>Shadow</styled.ThinText>
                  </styled.Row>

                </styled.InfoContent>
                
              
              </styled.CardContainer>
            </LinearGradient>
  
        //   </styled.CardView>
    )
  }

export default FrontCard