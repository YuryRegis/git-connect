import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import User from '../../../assets/img/Elliot.jpg'
import Header from '../../components/Header/index'
import FollowersList from '../../components/FollowersList'
import FollowingList from '../../components/FollowingList'
import {setUrlWebView} from '../../store/actions/urlSource'
import GradientButton from '../../components/GradientButton'
import TechnologiesList from '../../components/TechnologiesList'
import UserProfilePhoto from '../../components/UserProfilePhoto'

import Data from './data'
import * as Aux from './aux'


function Home({user, navigation, onRedirect, ...rest}) {
  
  function gradientButtonHandler() {
    onRedirect(user.gitHubUrl)
    return navigation.navigate('WebContent')
  }

  return (
    <React.Fragment>
      <Header logout {...rest}/>
      <styled.Container>

        <UserProfilePhoto source={{uri: user.avatarUrl}} height={150} width={150}/>
        
        <styled.RowContainer>
          <styled.UserName> {user.name} </styled.UserName>
          <styled.UserLastName> {user.login} </styled.UserLastName>
        </styled.RowContainer>
        
        <styled.Company> {user.company} </styled.Company>

        <styled.BioContainer>
          <styled.Title> Bio </styled.Title>
          <styled.BioText>{user.bio}</styled.BioText>
        </styled.BioContainer>

        <FollowersList navigate={navigation.push}/>

        {/* <TechnologiesList /> */}

        <FollowingList navigate={navigation.push}/>
        
        <styled.AlignedContainer>
          <GradientButton onPress={gradientButtonHandler}>
            <styled.ButtonContent>

              <styled.TextButton> Editar perfil no GitHub </styled.TextButton>
              
              <styled.Icons size={32} name='logo-github'/>

            </styled.ButtonContent>
          </GradientButton>
        </styled.AlignedContainer>

      </styled.Container>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onRedirect: url => dispatch(setUrlWebView(url))
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)