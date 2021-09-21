import * as api from '../../api'
import * as styled from './style'
import { ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/core'
import User from '../../../assets/img/Elliot.jpg'
import React, { useState, useEffect } from 'react'
import HeaderNav from '../../components/HeaderNav/index'
import FollowersList from '../../components/FollowersList'
import GradientCards from '../../components/GradientCards'
import MaskedGradient from '../../components/MaskedGradient'
import TechnologiesList from '../../components/TechnologiesList'
import UserProfilePhoto from '../../components/UserProfilePhoto'
import DefaultIconProfile from '../../components/DefaultIconProfile'

import Data from './data'
import * as Aux from './aux'
import { FlatList } from 'react-native-gesture-handler'
import RepoCounters from '../../components/RepoCounters'


function Profile({navigation,...rest}) {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [topProjects, setTopProjects] = useState([])

  const route = useRoute()
  const { userName } = route.params
  
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const userInfo = await api.getUserInfo(userName)
      setUserData(() => userInfo.data)
      const repos = await api.getUserRepos(userName)
      const Repositories = Aux.getMostPopularRepos(repos.data, 5)
      setUserRepos(() => repos.data)
      setTopProjects(() => Repositories)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  function FlatListHandler({item}) {
    return (
      <GradientCards key={`${item.id}`}>
        <styled.RollFlatContainer key={`Row${item.id}`}>
          
          <styled.LeftContent>
            {item.language}
          </styled.LeftContent>
          
          <styled.RightContent>
            <RepoCounters repo={item} />
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
      <HeaderNav chat={true} navigation={navigation} {...rest}/>
      <styled.Container> 

        {isLoading ? (
          <DefaultIconProfile size={150} />
        ) : (
          <UserProfilePhoto source={{uri:userData.avatar_url}} height={150} width={150}/>
        )}
        
        <styled.RowContainer>

          <styled.UserName> {
            isLoading ? 'Name' : userData.name?.split(' ')[0]
          } </styled.UserName>

          <styled.UserLastName> {
            isLoading ? 'LastName' : (userData.name?.split(' ')[1] || userData.login) 
          } </styled.UserLastName> 

        </styled.RowContainer>
        
        <styled.Company> {
          isLoading ? 'Loading info...' : (userData.company || 'User without company info') 
          } </styled.Company>

        <FollowersList data={{repositories: userRepos}} navigate={navigation.push}/>

        <TechnologiesList repositories={userRepos} navigate={navigation.push}/>

        <styled.ProjectsContent>
          <styled.TopProjectsContainer>
            <styled.Title> Top Projects </styled.Title>

            <styled.scrollContainer>
              <FlatList
                keyExtractor={(Repositories) => String(Repositories.id)}
                renderItem={FlatListHandler}
                data={topProjects}
              />
            </styled.scrollContainer>

          </styled.TopProjectsContainer>
        </styled.ProjectsContent>
        
      </styled.Container>
    </React.Fragment>
  )
}

export default Profile