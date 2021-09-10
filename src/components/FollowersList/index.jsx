import React from 'react'
import * as styled from './style'
import { FlatList } from 'react-native'
import data from './data'


function FollowersList(props) {
  
  function FlatListHandler({item}) {
    return (
        <styled.AvatarButton key={item.id} {...item}>
            <styled.Avatar key={item.id} {...item} 
                source={{uri: item.source}}/>
        </styled.AvatarButton>
    )
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            <styled.RowContainer>
                <styled.Title> Seguidores </styled.Title>
                <styled.UserCounter> (1.241K) </styled.UserCounter>
            </styled.RowContainer>

            <styled.SeeAllButton> 
                <styled.SeeAllText> Ver todos </styled.SeeAllText>
            </styled.SeeAllButton>
        </styled.RowContainer>

        <styled.FollowersContainer>
            <FlatList
                data={data}
                numColumns={5}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={data => String(data.id)}
                renderItem={FlatListHandler} />
        </styled.FollowersContainer>
    </styled.Container>
  )
}


export default FollowersList