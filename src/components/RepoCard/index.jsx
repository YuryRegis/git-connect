import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import Languages from '../../../assets/icons'
import MaskedGradient from '../../components/MaskedGradient'
import { setUrlWebView } from '../../store/actions/urlSource'



function Logo({language, color, size}) {
  const Icon = Languages[language]?.icon || Languages['Default']?.icon
  return  <Icon color={color} height={size} width={size}/> 
}


export function RepoCard({repository, navigation, onRedirect}) {
  
  function redirectHandler(){
    onRedirect(repository.html_url)
    return navigation.navigate('Repository')
  }
  
  return (
    <styled.CardContainer> 
            
            <styled.CardHeader>

                <styled.Author>{aux.truncateText(repository.owner.login,36)}</styled.Author>
                
                <styled.RowContent justify='flex-end'>
                    <styled.Icon name='star-outline' size={15} color={styled.StarIconColor} />
                    <styled.Counter>{repository.stargazers_count}</styled.Counter>
                    <styled.Icon name='git-branch' size={15} color={styled.ForkIconColor} />
                    <styled.Counter>{repository.forks_count}</styled.Counter>
                    <styled.Icon name='bug' size={15} color={styled.BugIconColor} />
                    <styled.Counter>{repository.open_issues_count}</styled.Counter>
                    <styled.Icon name='eye' size={15} color={styled.EyeIconColor} />
                    <styled.Counter>{repository.watchers_count}</styled.Counter>
                </styled.RowContent>

            </styled.CardHeader>

            <styled.CardContent>

                <styled.Logo>
                    <MaskedGradient size={{h:100, w:100}}>
                        <Logo language={repository.language} size={100}/>
                    </MaskedGradient>
                    <styled.ProjectName>{aux.truncateText(repository.name, 20)}</styled.ProjectName>
                </styled.Logo>

                <styled.InfoContainer>
                    
                    <styled.InfoContent>

                        <styled.InfoTitle>Descrição</styled.InfoTitle>
                        <styled.InfoDescription>{ repository.description ? 
                            aux.truncateText(repository.description)
                            : 'Projeto sem descrição. Visite o projeto no GitHub para mais detalhes.' }
                        </styled.InfoDescription>
                        
                        <styled.RowContent justify='space-between'>

                            <styled.LanguageView>
                                <styled.InfoTitle>Linguagem</styled.InfoTitle>
                                <styled.InfoDescription>{repository.language || 'Desconhecido'}</styled.InfoDescription>
                            </styled.LanguageView>
                
                            <styled.GithubButton onPress={redirectHandler}>
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

function mapDispatchToProps(dispatch) {
  return {
    onRedirect: source => dispatch(setUrlWebView(source)),
  }
}

export default connect(null, mapDispatchToProps)(RepoCard)