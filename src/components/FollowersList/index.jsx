import * as api from '../../api'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import React, {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/core'
import { FlatList, ActivityIndicator } from 'react-native'
import { setLastUserViewed } from '../../store/actions/lastUserViwed'
// import data from './data'


function FollowersList({userFollowers, navigate, data, onSetLastUser}) {
  const [followersData, setFollowersData] = useState([...userFollowers])
  const [topFollowers, setTopFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const route = useRoute()
  
  useEffect(() => { 
        async function fetchData() {
        if (!data) {
            const topFive = aux.FirstsFromArray(userFollowers, 5)
            setTopFollowers(() => topFive)
            return
        }
        const { userName } = route.params
        setIsLoading(true)
        const response = await api.getUserFollowers(userName)
        const topFive = aux.FirstsFromArray(response, 5)
        setFollowersData(() => response)
        setTopFollowers(() => topFive)
        setIsLoading(false)
    }
    fetchData()
  } ,[])


  function FlatListHandler({item}) {
      if (!navigate) return console.log('Navigate error!',navigate)
    async function onPressHandler() {
        await onSetLastUser(item)
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

  function seeAllButtonHandler() {
        navigate('AllUserFollowing', {data: followersData, origin: 'AllUserFollowers'})
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            <styled.RowContainer>

                <styled.Title> Seguidores </styled.Title>
                <styled.UserCounter>{isLoading ? ' ? ' : followersData.length} </styled.UserCounter>

            </styled.RowContainer>

            <styled.SeeAllButton onPress={seeAllButtonHandler}> 
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

function mapDispatchToProps(dispatch) {
    return {
        onSetLastUser: (user) => dispatch(setLastUserViewed(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList)