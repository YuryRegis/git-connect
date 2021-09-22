import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import data from './data'


function FollowingList({userFollowing, navigate}) {
  
  const topFollowing = userFollowing.slice(0, 5)

  function FlatListHandler({item}) {
    function onPressHandler() {
        navigate('FollowerProfile', {userName: item.login})
    }
    return (
      <styled.AvatarButton onPress={onPressHandler} key={item.id} {...item}>
        <styled.Avatar key={item.login} {...item} 
          source={{uri: item.avatar_url}}/>
      </styled.AvatarButton>
    )
  }

  function seeAllButtonHandler() {
    navigate('AllUserFollowing', {data: userFollowing, origin: 'AllUserFollowing'})
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            <styled.RowContainer>
                <styled.Title> Seguindo </styled.Title>
                <styled.UserCounter> ({userFollowing.length}) </styled.UserCounter>
            </styled.RowContainer>

            <styled.SeeAllButton onPress={seeAllButtonHandler}> 
                <styled.SeeAllText> Ver todos </styled.SeeAllText>
            </styled.SeeAllButton>
        </styled.RowContainer>

        <styled.FollowersContainer>
            <FlatList
                numColumns={5}
                data={topFollowing}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={data => String(data.id)}
                renderItem={FlatListHandler} />
        </styled.FollowersContainer>
    </styled.Container>
  )
}

function mapStateToProps({user}) {
  return {
    userFollowing: user.following.nodes,
  }
}

export default connect(mapStateToProps,null)(FollowingList)