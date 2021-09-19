import * as api from '../../api'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import React, {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/core'
import { FlatList, ActivityIndicator } from 'react-native'
// import data from './data'


function FollowersList({userFollowers, navigate}) {
  const [followersData, setFollowersData] = useState([])
  const [topFollowers, setTopFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const route = useRoute()
  const isUserProfile = route.name === 'ProfileStack'

  
  useEffect(() => { 
        async function fetchData() {
        if (isUserProfile) {
            const topFive = aux.FirstsFromArray(userFollowers, 5)
            setTopFollowers(() => topFive)
            return
        }
        const { userName } = route.params
        setIsLoading(true)
        const data = await api.getUserFollowers(userName)
        const topFive = aux.FirstsFromArray(data, 5)
        setFollowersData(() => data)
        setTopFollowers(() => topFive)
        console.log(`UserProfile ${isUserProfile}: Data -> `, userName)
        setIsLoading(false)
    }
    fetchData()
  } ,[])


  function FlatListHandler({item}) {
      if (!navigate) return console.log('Navigate error!',navigate)
    function onPressHandler() {
        navigate('FollowerProfile', {
            userName: item.login
        })
    }
    return isLoading 
        ? <ActivityIndicator size="large" color={styled.activityColor} /> 
        : (
            <styled.AvatarButton onPress={onPressHandler} key={item.id} {...item}>
                <styled.Avatar key={item.login} {...item} 
                    source={{uri: item.avatar_url}}/>
            </styled.AvatarButton>
        )
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            <styled.RowContainer>

                <styled.Title> Seguidores </styled.Title>
                
                <styled.UserCounter> ({
                    isUserProfile 
                    ? userFollowers.length 
                    : (isLoading ? ' ? ' : followersData.length)}) 
                </styled.UserCounter>

            </styled.RowContainer>

            <styled.SeeAllButton onPress={()=>{}}> 
                <styled.SeeAllText> Ver todos </styled.SeeAllText>
            </styled.SeeAllButton>

        </styled.RowContainer>

        <styled.FollowersContainer>
            <FlatList
                numColumns={5}
                data={topFollowers}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={data => String(data.id)}
                renderItem={FlatListHandler} />
        </styled.FollowersContainer>
    </styled.Container>
  )
}

function mapStateToProps(state) {
    // console.log(state.follower)
    return {
        userFollowers: state.user.followers.nodes,
        // followerFollowers: state.follower.followers.nodes
    }
}

export default connect(mapStateToProps, null)(FollowersList)