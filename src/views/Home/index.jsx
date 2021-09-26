import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import Languages from '../../../assets/icons'
import MaskedGradient from '../../components/MaskedGradient'
import { setUrlWebView } from '../../store/actions/urlSource'
import { ActivityIndicator, BackHandler, Alert } from 'react-native'
import { throttle } from 'lodash'

const trending = require('trending-github')


function Logo({language, color, size}) {
    const Icon = Languages[language]?.icon || Languages['Default']?.icon
    return  <Icon color={color} height={size} width={size}/> 
}

export function Home({navigation, onRedirect}) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState('')
  
  React.useEffect(() => {
    setIsLoading(true)
    async function fetchFeed() {
        try {
            const feed = await trending('today', '')
            // console.log(feed)
            setData(feed)
            setIsLoading(false)
        } catch (error) {
            // console.log(error)
        }
    }
    fetchFeed()
  },[])

  React.useEffect(() => {
    function goBackHandler() {
        Alert.alert('Sair','Ei! Tem certeza que quer sair ?',[
            {text: 'Não', onPress: () => null, style: 'cancel'},
            {text: 'Sim', onPress: () => BackHandler.exitApp()}
        ])
    }
    BackHandler.addEventListener('hardwareBackPress', () => goBackHandler())
    return () => BackHandler.removeEventListener('hardwareBackPress', () => throttle(goBackHandler, 500, {trailing: false}))
  },[])

  function ActivityRender() {
      return (
        <styled.ActivityContent>
            <ActivityIndicator size="large" color={styled.ActivityIndicatorColor} />
        </styled.ActivityContent>
      )
  }

  function Card({item}) {

      function gitHubButtonHandler() {
        onRedirect(item.href)
        navigation.navigate('WebContent', { url: item.href })
      }

      return (
        <styled.CardContainer> 
            
            <styled.CardHeader>

                <styled.Author>({aux.truncateText(item.author,36)})</styled.Author>
                
                <styled.RowContent justify='flex-end'>
                    <styled.Icon name='star-outline' size={15} color={styled.StarIconColor} />
                    <styled.Counter>{item.stars}</styled.Counter>
                    <styled.Icon name='git-branch' size={15} color={styled.ForkIconColor} />
                    <styled.Counter>{item.forks}</styled.Counter>
                </styled.RowContent>

            </styled.CardHeader>

            <styled.CardContent>

                <styled.Logo>
                    <MaskedGradient size={{h:100, w:100}}>
                        <Logo language={item.language} size={100}/>
                    </MaskedGradient>
                    <styled.ProjectName>{aux.truncateText(item.name, 20)}</styled.ProjectName>
                </styled.Logo>

                <styled.InfoContainer>
                    
                    <styled.InfoContent>

                        <styled.InfoTitle>Descrição</styled.InfoTitle>
                        <styled.InfoDescription>{ item.description ? 
                            aux.truncateText(item.description)
                            : 'Projeto sem descrição. Visite o projeto no GitHub para mais detalhes.' }
                        </styled.InfoDescription>
                        
                        <styled.RowContent justify='space-between'>

                            <styled.LanguageView>
                                <styled.InfoTitle>Linguagem</styled.InfoTitle>
                                <styled.InfoDescription>{item.language || '?'}</styled.InfoDescription>
                            </styled.LanguageView>
                
                            <styled.GithubButton onPress={gitHubButtonHandler}>
                                <styled.RowContent>
                                    <styled.GithubButtonText>VISITAR</styled.GithubButtonText>
                                    <styled.Icon name='logo-github' size={17} color="#EEE" />
                                </styled.RowContent>
                            </styled.GithubButton>   
                    
                        </styled.RowContent>

                    </styled.InfoContent>

                </styled.InfoContainer>

            </styled.CardContent>

        </styled.CardContainer>
      )
  }

  return (
    <styled.Container>
        
        <Header screenTab='HomeTab' navigation={navigation}/>

        <styled.Container>
        { isLoading 
            ? <ActivityRender />
            : <FlatList 
                data={data}
                renderItem={Card} 
                keyExtractor={(item,index) => `${item.author}_${index}`}
        /> }
        </styled.Container>

    </styled.Container>
  )
}

function mapDispatchToProps(dispatch) {
    return {
      onRedirect: url => dispatch(setUrlWebView(url))
    }
  }

export default connect(null,mapDispatchToProps)(Home)