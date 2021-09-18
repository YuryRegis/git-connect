import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import data from './data'


function FollowersList({userFollowers}) {
  
  const topFollowers = aux.FirstsFromArray(userFollowers, 5)
  
  function FlatListHandler({item}) {
    function onPressHandler() {
        console.log(item.html_url)
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
                <styled.Title> Seguidores </styled.Title>
                <styled.UserCounter> ({userFollowers.length}) </styled.UserCounter>
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
    return {
        userFollowers: state.user.followers.nodes,
    }
}

export default connect(mapStateToProps,null)(FollowersList)