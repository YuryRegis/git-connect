import React from 'react'
import * as styled from './style'
import User from '../../../assets/img/Elliot.jpg'
import HeaderNav from '../../components/HeaderNav/index'
import FollowersList from '../../components/FollowersList'
import FollowingList from '../../components/FollowingList'
import GradientButton from '../../components/GradientButton'
import TechnologiesList from '../../components/TechnologiesList'
import UserProfilePhoto from '../../components/UserProfilePhoto'

import Data from './data'
import * as Aux from './aux'


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

        {/* <TechnologiesList /> */}

        <FollowingList />
        
        <GradientButton>
          <styled.ButtonContent>

            <styled.TextButton> Editar perfil no GitHub </styled.TextButton>
            
            <styled.Icons size={32} name='logo-github'/>

          </styled.ButtonContent>
        </GradientButton>

      </styled.Container>
    </React.Fragment>
  )
}

export default Home