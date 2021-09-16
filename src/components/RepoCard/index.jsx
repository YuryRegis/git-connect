import React from 'react'
import * as styled from './style'
import RepoCounters from '../../components/RepoCounters'
import GradientCards from '../../components/GradientCards'


const defaultColors = styled.GradientColors

export function RepoCard({repository, colors={...defaultColors}}) {
  return (
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
  )  
}