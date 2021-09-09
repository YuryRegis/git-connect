import React from 'react'
import * as styled from './style'
import User from '../../../assets/img/Elliot.jpg'
import UserProfilePhoto from '../../components/UserProfilePhoto'


function Home() {
  return (
    <styled.Container>
        <UserProfilePhoto source={User} height={150} width={150}/>
        <styled.RowContainer>
          <styled.UserName> Elliot </styled.UserName>
          <styled.UserLastName> Alderson </styled.UserLastName>
        </styled.RowContainer>
        <styled.Company> Cybersecurity Engineer at Allsafe </styled.Company>
    </styled.Container>
  )
}

export default Home