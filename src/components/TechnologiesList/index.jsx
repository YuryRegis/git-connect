import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import Languages from '../../../assets/icons'
import Theme from '../../../assets/style/global'
import { LinearGradient } from 'expo-linear-gradient'
import { Alert, FlatList } from 'react-native'
// import data from './data'


function TechnologiesList({repositories, navigate}) {
  
  const languagesRanking = aux.getLanguagesRanking(repositories)
  const data = aux.getRankingData(languagesRanking, repositories)
  const topFiveLanguages = aux.FirstsFromArray(data, 5)


  function FlatListHandler({item}) {

    function buttonHandler() {
      Alert.alert('Alerta',item.language, [{text: 'OK'}])
    }

    function getLanguageIcon(language) {
      if (!language || language === '') {
        return Languages.Default.icon
      } 
      else {
        const SVG = Languages[language]?.icon || Languages.Default.icon
        return SVG
      }
    }
    const IconSVG = getLanguageIcon(item.language)
          
    console.log(`${item.language} => `, IconSVG)
    return (
        <styled.GradientButton onPress={buttonHandler} {...item}>
            <LinearGradient 
                style={{height:60, width:60, borderRadius:30}}
                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                colors={[Theme.gradient.secondary, Theme.gradient.primary]}
              >  
              <styled.IconContainer  {...item}>
                  <IconSVG
                    height={45} width={45} 
                    color={styled.IconSvgColor}  />
              </styled.IconContainer>
            </LinearGradient>
        </styled.GradientButton>
    )
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            
            <styled.Title> Principais tecnologias </styled.Title>
            
            <styled.SeeAllButton> 
                <styled.SeeAllText> Ver projetos </styled.SeeAllText>
            </styled.SeeAllButton>
        </styled.RowContainer>

        <styled.FollowersContainer>
            <FlatList
                numColumns={5}
                data={topFiveLanguages}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={data => String(data.id)}
                renderItem={FlatListHandler} />
        </styled.FollowersContainer>
    </styled.Container>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onRedirect: url => dispatch(setUrlWebView(url))
  }
}

export default connect(null,mapDispatchToProps)(TechnologiesList)