import React from 'react'
import * as styled from './style'


export function RepoCounters({repo}) {
    return (
        <styled.Container>
            <styled.ElementContainer key={`stars${repo.id}`} >
              <styled.Icons size={10}  
                name='star-half'
                key={`star-half${repo.id}`}/>
              <styled.FlatTextElement key={`stars_c${repo.id}`}>
                {repo.stargazers_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`fork${repo.id}`} >
              <styled.Icons size={10}  
                name='git-branch'
                key={`forks${repo.id}`}/>
              <styled.FlatTextElement key={`forks_c${repo.id}`}>
                {repo.forks_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`issues${repo.id}`} >
              <styled.Icons size={10}  
                name='bug'
                key={`bugs${repo.id}`}/>
              <styled.FlatTextElement key={`issues_c${repo.id}`}>
                {repo.open_issues_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`watchers${repo.id}`} >
              <styled.Icons size={10}  
                name='eye-sharp'
                key={`eye${repo.id}`}/>
              <styled.FlatTextElement key={`watchers_c${repo.id}`}>
                {repo.watchers_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>
        </styled.Container>
    )
}

export default RepoCounters