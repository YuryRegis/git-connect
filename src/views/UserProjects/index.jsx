import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import Languages from '../../../assets/icons'
import { ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/core'
import HeaderNav from '../../components/HeaderNav'
import MaskedGradient from '../../components/MaskedGradient'
import { setUrlWebView } from '../../store/actions/urlSource'


function Logo({language, color, size}) {
    const Icon = Languages[language]?.icon || Languages['Default']?.icon
    return  <Icon color={color} height={size} width={size}/> 
}

export function UserProjects({user, navigation, onRedirect}) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [data, setData] = React.useState('')
  
  const route = useRoute()
  const { repositories, filter } = route.params

  React.useEffect(() => {
    setIsLoading(true)

    if (repositories) {
        if (filter) {
            const filtered = aux.filterByLanguage(repositories, filter)
            const name = filtered[0].owner.login
            setData(filtered)
            setUserName(name)
        } 
        else  setData(repositories)
    } else {
        const repos = user.repos.nodes
        const name = user.login
        setData(repos)
        setUserName(name)   
    }
    
    setIsLoading(false)
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
        onRedirect(item.html_url)
        navigation.navigate('WebContent', { url: item.html_url })
      }

      return (
        <styled.CardContainer> 
            
            <styled.CardHeader>

                <styled.Author>{item.full_name}</styled.Author>

                <styled.RowContent justify='flex-end'>
                    <styled.Icon name='star-outline' size={15} color={styled.StarIconColor} />
                    <styled.Counter>{item.stargazers_count}</styled.Counter>
                    <styled.Icon name='git-branch' size={15} color={styled.ForkIconColor} />
                    <styled.Counter>{item.forks_count}</styled.Counter>
                </styled.RowContent>

            </styled.CardHeader>

            <styled.RowContent >

                <styled.Logo>
                    <MaskedGradient size={{h:100, w:100}}>
                        <Logo language={item.language} size={100}/>
                    </MaskedGradient>
                    <styled.ProjectName>{item.name}</styled.ProjectName>
                </styled.Logo>

                <styled.InfoContainer>
                    
                    <styled.InfoContent>

                        <styled.InfoTitle>Descrição</styled.InfoTitle>
                        <styled.InfoDescription>{ item.description ?
                            aux.truncateText(item.description)
                            : 'Projeto sem descrição...'}</styled.InfoDescription>
                        
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

            </styled.RowContent>

        </styled.CardContainer>
      )
  }

  return (
    <styled.Container>
        
        <HeaderNav screenNav='ProjectsStack' user={userName} navigation={navigation}/>

        <styled.Container>
        { isLoading 
            ? <ActivityRender />
            : <FlatList 
                data={data}
                renderItem={Card} 
                keyExtractor={(item) => `${item.id}`}
        /> }
        </styled.Container>

    </styled.Container>
  )
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }}

function mapDispatchToProps(dispatch) {
    return {
      onRedirect: url => dispatch(setUrlWebView(url))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserProjects)