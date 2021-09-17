import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import RepoCounters from '../../components/RepoCounters'
import GradientCards from '../../components/GradientCards'
import { setUrlWebView } from '../../store/actions/urlSource'


const defaultColors = styled.GradientColors

export function RepoCard({repository, colors={...defaultColors}, navigation, onRedirect}) {
  
  function redirectHandler(){
    onRedirect(repository.html_url)
    return navigation.navigate('Repository')
  }
  
  return (
    <styled.ButtonCard onPress={redirectHandler} activeOpacity={.7}>
      <GradientCards colors={colors}>
        <styled.HeaderContent>

          <styled.Language>{repository.language}</styled.Language>
          <RepoCounters repo={repository} />

        </styled.HeaderContent>

        <styled.Content>

          <styled.Image source={{uri: repository.owner.avatar_url}} />
          
          <styled.RepoInfoContent>
            <styled.RepoName>{repository.name}</styled.RepoName>
            <styled.RepoDescription>{repository.description}</styled.RepoDescription>
          </styled.RepoInfoContent>

        </styled.Content>

      </GradientCards>
    </styled.ButtonCard>
  )  
}

function mapDispatchToProps(dispatch) {
  return {
    onRedirect: source => dispatch(setUrlWebView(source)),
  }
}

export default connect(null, mapDispatchToProps)(RepoCard)