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


function Home(props) {

  const Repositories = Aux.getMostPopularRepos(Data, 5)

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

        
        
      </styled.Container>
    </React.Fragment>
  )
}

export default Home