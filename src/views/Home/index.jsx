import React from 'react'
import * as styled from './style'
import User from '../../../assets/img/Elliot.jpg'
import UserProfilePhoto from '../../components/UserProfilePhoto'
import HeaderNav from '../../components/HeaderNav/index'


function Home(props) {
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
      
      </styled.Container>
    
    </React.Fragment>
  )
}

export default Home