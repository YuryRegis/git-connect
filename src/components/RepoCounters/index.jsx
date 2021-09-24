import React from 'react'
import * as styled from './style'


export function RepoCounters({repo}) {
    return (
        <styled.Container>
            <styled.ElementContainer key={`stars${repo.id}`} >
              <styled.Icons size={10}  
                name='star-half'
                color={styled.StarIconColor}
                key={`star-half${repo.id}`}/>
              <styled.FlatCounterElement key={`stars_c${repo.id}`}>
                {repo.stargazers_count}
              </styled.FlatCounterElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`fork${repo.id}`} >
              <styled.Icons size={10}  
                name='git-branch'
                color={styled.ForkIconColor}
                key={`forks${repo.id}`}/>
              <styled.FlatCounterElement key={`forks_c${repo.id}`}>
                {repo.forks_count}
              </styled.FlatCounterElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`issues${repo.id}`} >
              <styled.Icons size={10}  
                name='bug'
                color={styled.BugIconColor}
                key={`bugs${repo.id}`}/>
              <styled.FlatCounterElement key={`issues_c${repo.id}`}>
                {repo.open_issues_count}
              </styled.FlatCounterElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`watchers${repo.id}`} >
              <styled.Icons size={10}  
                name='eye-sharp'
                color={styled.WatchIconColor}
                key={`eye${repo.id}`}/>
              <styled.FlatCounterElement key={`watchers_c${repo.id}`}>
                {repo.watchers_count}
              </styled.FlatCounterElement>
            </styled.ElementContainer>
        </styled.Container>
    )
}

export default RepoCounters