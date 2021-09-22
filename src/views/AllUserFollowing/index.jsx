import React from 'react'
import * as styled from './style'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import HeaderNav from '../../components/HeaderNav'


function AllUserFollowing({navigation}) {
    const route = useRoute()
    const { data, origin } = route.params

    function Card({item}) {
        
        function userCardHandler() {
            navigation.navigate('FollowerProfile',{ userName: item.login })
        }
        
        return (
            <styled.CardContainer onPress={userCardHandler}>

               <styled.HeadContainer>

                    <styled.Avatar source={{uri: item.avatar_url}}/>
                    
                    <styled.NameContent>
                        <styled.UserName>{item.login}</styled.UserName>
                    </styled.NameContent>

               </styled.HeadContainer>

               <styled.BodyContainer>

                   <styled.TagContainer>
                     <styled.Tag>{item.type}</styled.Tag>
                   </styled.TagContainer>

               </styled.BodyContainer>

            </styled.CardContainer>
        )
    }

    return (
        <styled.Container>

            <HeaderNav navigation={navigation} screenNav={origin}/>
            
            <styled.Container>
                <FlatList 
                    data={data}
                    numColumns={3}
                    renderItem={Card}
                    keyExtractor={(item) => String(item.id)}
                    columnWrapperStyle={{justifyContent:'space-evenly'}}
                />
            </styled.Container>

        </styled.Container>
    )
}


export default AllUserFollowing