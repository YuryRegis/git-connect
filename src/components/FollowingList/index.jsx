import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import data from './data'


function FollowingList({userFollowing}) {
  
  const topFollowing = userFollowing.slice(0, 5)

  function FlatListHandler({item}) {
    function onPressHandler() {
        console.log(item.hml_url)
    }
    return (
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
                <styled.Title> Seguindo </styled.Title>
                <styled.UserCounter> ({userFollowing.length}) </styled.UserCounter>
            </styled.RowContainer>

            <styled.SeeAllButton> 
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