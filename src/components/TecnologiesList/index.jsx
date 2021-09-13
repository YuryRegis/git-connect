import React from 'react'
import * as styled from './style'
import { FlatList } from 'react-native'
import Theme from '../../../assets/style/global'
import { LinearGradient } from 'expo-linear-gradient'
import data from './data'


function TecnologiesList(props) {
  
  function FlatListHandler({item}) {
    return (
        <styled.GradientButton key={item.id} {...item}>
            <LinearGradient 
                style={{height:60, width:60, borderRadius:30}}
                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                colors={[Theme.gradient.secondary, Theme.gradient.primary]}
              >  
              <styled.IconContainer key={item.id} {...item}>
                  <styled.Icon 
                    size={45}
                    key={item.id} 
                    name={item.source}/>
              </styled.IconContainer>
            </LinearGradient>
        </styled.GradientButton>
    )
  }

  return (
    <styled.Container>

        <styled.RowContainer main>
            
            <styled.Title> Principais tecnologias </styled.Title>
            
            <styled.SeeAllButton> 
                <styled.SeeAllText> Ver projetos </styled.SeeAllText>
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


export default TecnologiesList