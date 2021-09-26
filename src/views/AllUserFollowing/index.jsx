import React from 'react'
import * as styled from './style'
import * as aux from '../../utils'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import HeaderNav from '../../components/HeaderNav'
import { setLastUserViewed } from '../../store/actions/lastUserViwed' 
import { connect } from 'react-redux'


function AllUserFollowing({navigation, onSetLastUserViewed}) {
    const route = useRoute()
    const { data, origin } = route.params

    function Card({item}) {
        
        async function userCardHandler() {
            await onSetLastUserViewed(item.login)
            navigation.push('FollowerProfile',{ userName: item.login })
        }
        
        return (
            <styled.CardContainer onPress={userCardHandler}>

               <styled.HeadContainer>

                    <styled.Avatar source={{uri: item.avatar_url}}/>
                    
                    <styled.NameContent>
                        <styled.UserName>{aux.truncateText(item.login, 13)}</styled.UserName>
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


function mapDispatchToProps(dispatch) {
    return {
        onSetLastUserViewed: (userName) => dispatch(setLastUserViewed(userName))
    }
}


export default connect(null, mapDispatchToProps)(AllUserFollowing)