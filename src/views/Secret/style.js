import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import { StyleSheet } from 'react-native'


// CONSTANTS

export const primaryColor = Theme.secretCard.background
export const secondaryColor = Theme.secretCard.alternative

export const LottieBorder = {
    height: 30,
    width: 30, 
    marginBottom: '.5%',
    marginRight: '10%',
}


// FLIP CARD STYLES

export const Touchable = styled.TouchableOpacity``

export const FlipCard = StyleSheet.create({
    FrontCard: {
        backfaceVisibility: 'hidden',
    },
    BackCard: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
    },
})
// export const FrontCard = styled.AnimatedView`
//     /* backface-visibility: hidden; */
// `

// export const BackCard = styled.AnimatedView`
//     position: absolute;
// `


// FRONT AND BACK CARD STYLES

export const GradientStyle = {
    borderRadius:30,
}


export const Container = styled.View`
    flex: 1;
`

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
`

export const LottieContent = styled.View`
    width: 200px;
    height: 200px;
`

export const AvatarContent = styled.View`
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.Image`
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 100px;
`

export const CardContainer = styled.View`
    justify-content: ${({back}) => back ? 'flex-start' : 'center'};
    align-items: center;

    height: 400px;
    width: 300px;

    padding: ${({back}) => back ? '16px' : '37px 50px'};

    border-radius: 30px;
    border-width: 1px;
    border-color: ${Theme.secretCard.border};
`

// BACK CARD STYLES

export const BackRowContent = styled.View`
    flex-direction: row;
    width: 100%;

    justify-content: center;

    border-bottom-width: 3px;
    border-color: ${Theme.secretCard.border};
    
    padding-bottom: 9px;
`

export const BackAvatar = styled.Image`
    width: 70px;
    height: 70px;

    margin-top: 9px;
    align-self: center;

    border-radius: 35px;
    border-width: 1.5px;
    border-color: ${Theme.gradient.secondary};
`

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
       
    border-bottom-width: 2px;
    border-color: ${Theme.secretCard.alternative};
`
export const View = styled.View`
`

export const ThinName = styled.Text`
    font-family: 'roboto-light';
    color: ${Theme.secondaryColor};
    padding-top: 8px;
    font-size: 15px;
    align-self: center;
`

export const BoldName = styled.Text`
    color: ${Theme.secondaryColor};
    padding-top: 8px;
    font-size: 15px;
    align-self: center;
    font-family: 'roboto-bold';
`

export const InfoContent = styled.View`
    width: 100%;
`

export const BoldText = styled.Text`
    font-size: 19px;
    margin: 16px 0 16px 0;
    font-family: 'roboto-regular';
    color: ${Theme.quaternaryColor};
`

export const ThinText = styled.Text`
    margin: 16px 0 16px 9px;
    font-size: 19px;
    font-family: 'roboto-light';
    color: ${Theme.quaternaryColor};
`