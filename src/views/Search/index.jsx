import React from 'react'
import * as styled from './style'
import Languages from './languages'
import { FlatList } from 'react-native'
import { Picker } from '@react-native-community/picker'
import Header from '../../components/Header'


function FlatListHandler(props) {
    return (<></>)
}

export function Search(props) {
    const [language, setLanguage] = React.useState('')

    return (
        <styled.Container>
            <Header />
            
            <styled.RowContainer>

                <styled.InputContainer>
                  <styled.Input
                    placeholder='Pesquisar por repositórios'
                    placeholderTextColor={styled.placeholderColor} />
                  
                  <styled.SearchButton>
                    <styled.Icon name='search' size={19} />
                  </styled.SearchButton>
                </styled.InputContainer>

                <styled.PickerContainer>    
                    <Picker
                      style={styled.Picker}   
                      selectedValue={language}
                      prompt='Filtrar pesquisa por linguagem'
                      onValueChange={(value)=>setLanguage(value)}
                    >   
                        <Picker.Item label='' value='' />

                        {Languages.map((item, _) => {
                            return (
                                <Picker.Item key={item.value} label={item.label} value={item.value}>
                                    {/* {item.label} */}
                                </Picker.Item>
                            )
                        })}
                    </Picker>
                    
                    <styled.ChevronContainer>
                        <styled.PickerText isSelected={language===''}>Linguagem</styled.PickerText>
                        <styled.Icon name='chevron-down' size={19} />
                    </styled.ChevronContainer>
                </styled.PickerContainer>
                {/* <styled.Button>
                    <styled.Icon name='search' size={25}/>
                </styled.Button> */}
            </styled.RowContainer>
            
        </styled.Container>
    )
}

export default Search