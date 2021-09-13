import React from 'react'
import * as styled from './style'
import User from '../../../assets/img/Elliot.jpg'
import HeaderNav from '../../components/HeaderNav/index'
import FollowersList from '../../components/FollowersList'
import GradientCards from '../../components/GradientCards'
import TechnologiesList from '../../components/TechnologiesList'
import UserProfilePhoto from '../../components/UserProfilePhoto'

import Data from './data'
import * as Aux from './aux'
import { FlatList } from 'react-native-gesture-handler'


function Profile(props) {

  const Repositories = Aux.getMostPopularRepos(Data, 5)

  function FlatListHandler({item}) {
    return (
      <GradientCards key={`${item.id}`}>
        <styled.RollFlatContainer key={`Row${item.id}`}>
          
          <styled.LeftContent>
            {item.language}
          </styled.LeftContent>
          
          <styled.RightContent>
            <styled.ElementContainer key={`stars${item.id}`} >
              <styled.Icons size={10}  
                name='star-half'
                key={`star-half${item.id}`}/>
              <styled.FlatTextElement key={`stars_c${item.id}`}>
                {item.stargazers_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`fork${item.id}`} >
              <styled.Icons size={10}  
                name='git-branch'
                key={`forks${item.id}`}/>
              <styled.FlatTextElement key={`forks_c${item.id}`}>
                {item.forks_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`issues${item.id}`} >
              <styled.Icons size={10}  
                name='bug'
                key={`bugs${item.id}`}/>
              <styled.FlatTextElement key={`issues_c${item.id}`}>
                {item.open_issues_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>

            <styled.ElementContainer key={`watchers${item.id}`} >
              <styled.Icons size={10}  
                name='eye-sharp'
                key={`eye${item.id}`}/>
              <styled.FlatTextElement key={`watchers_c${item.id}`}>
                {item.watchers_count}
              </styled.FlatTextElement>
            </styled.ElementContainer>
          </styled.RightContent>
        </styled.RollFlatContainer> 

        <styled.FlatElementTitle>
          {item.name}
        </styled.FlatElementTitle> 
      </GradientCards>
    )
  }


  return (
    <React.Fragment>
      <HeaderNav {...props}/>
      <styled.Container>

        <UserProfilePhoto source={User} height={150} width={150}/>
        
        <styled.RowContainer>
          <styled.UserName> Elliot </styled.UserName>
          <styled.UserLastName> Alderson </styled.UserLastName>
        </styled.RowContainer>
        
        <styled.Company> Cybersecurity Engineer at Allsafe </styled.Company>

        <FollowersList />

        <TechnologiesList />

        
        <styled.TopProjectsContainer>
          <styled.Title> Top Projects </styled.Title>

          <styled.scrollContainer>
            <FlatList
              data={Repositories}
              keyExtractor={(Repositories) => Repositories.id}
              renderItem={FlatListHandler}
            />
          </styled.scrollContainer>
        </styled.TopProjectsContainer>

      </styled.Container>
    </React.Fragment>
  )
}

export default Profile