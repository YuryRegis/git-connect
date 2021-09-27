import React from 'react'
import * as styled from './style'
import { Animated, View } from 'react-native'
import HeaderNav from '../../components/HeaderNav'
import FrontCard from './FrontCard'
import BackCard from './BackCard'






export function Secret({navigation}) {
  const [isFlipped, setIsFlipped] = React.useState(false)
  const animate = React.useRef(new Animated.Value(0))

  const interpolateFrontCard = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '-180deg']
  })

  const interpolateBackCard = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['-180deg', '0deg']
  })

  function flipHandler() {
    Animated.timing(animate.current, {
      toValue: isFlipped ? 0 : 180,
      duration: 300,
      useNativeDriver: true
    }).start(() => setIsFlipped(prevState => !prevState))
  }

  return (
    <styled.Container>

        <HeaderNav navigation={navigation}/>

        <styled.Content>
          <styled.Touchable onPress={flipHandler} activeOpacity={1}>

          <Animated.View style={[{transform: [{rotateY: interpolateFrontCard}]},
            styled.FlipCard.BackCard]}>
            <FrontCard/>
          </Animated.View>

          <Animated.View style={[styled.FlipCard.FrontCard, 
            {transform: [{rotateY: interpolateBackCard}]}]}>
            <BackCard/>
          </Animated.View>

          </styled.Touchable>
        </styled.Content>

    </styled.Container>
  )
}   

export default Secret