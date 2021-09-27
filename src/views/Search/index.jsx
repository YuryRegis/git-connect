import React from 'react'
import * as api from '../../api'
import * as styled from './style'
import Languages from './languages'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import RepoCard from '../../components/RepoCard'
import { Picker } from '@react-native-community/picker'
import MaskedGradient from '../../components/MaskedGradient'
import LottieView from 'lottie-react-native'


function AnimatedCursor({inputValue}) {
    return <LottieView 
        source={require('../../../assets/lottie/lf30_editor_cursor.json')} 
        style={[styled.AnimatedCursor,
             {opacity: inputValue==='' ? 1 : 0}]}
        autoPlay loop />
}

export function Search(props) {
    const [page, setPage] = React.useState(1)
    const [pageLimit, setPageLimit] = React.useState(1)
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [language, setLanguage] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [isAlreadySearched, setIsAlreadySearched] = React.useState(false)
    const [placeholder, setPlaceholder] = React.useState('Pesquisar por repositórios')

    function FlatListHandler({item, index}) {
        const colors = {
            primary: styled.gradient.quaternary,
            secondary: styled.gradient.secondary }
        return (
            <RepoCard repository={item} colors={colors} {...props}/>
        )
    }

    const memoItem = React.useMemo(() => FlatListHandler, [data])

    async function nextPageSearch() {
        if (isLoading || (page > pageLimit)) return
        setIsLoading(true)
        const response = await api.searchRepos({search, language, page})
        setData(() => [...data, ...response.items])
        setIsLoading(false)
        setPage(() => page + 1)
    }

    async function searchHandler() {
        if (isLoading) return
        setIsAlreadySearched(true)
        setIsLoading(true)
        setPageLimit(()=>1)
        setPage(()=>1)
        setData([])

        // console.log('page',page)
        const response = await api.searchRepos({search, language, page})
        setPage(() => page + 1)
        setIsLoading(false)
        setData(() => response.items)
        setPageLimit(() => response.pages)
}

    return (
        <styled.Container>
            <Header screenTab='SearchTab' {...props}/>
            
            <styled.RowContainer>

                <styled.InputContainer>

                    {/* <styled.InputView> */}
                        <AnimatedCursor inputValue={search}/>
                        <styled.Input
                            placeholder={placeholder}
                            keyboardType="default"
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => placeholder==='' && setPlaceholder('Pesquisar por repositórios')}
                            onChangeText={(text) => setSearch(()=>text)}
                            placeholderTextColor={styled.placeholderColor} />
                    {/* </styled.InputView> */}
                    
                    <styled.SearchButton onPress={searchHandler}>
                        <styled.Icon name='search' size={25} />
                    </styled.SearchButton>
                   
                </styled.InputContainer>

                
            </styled.RowContainer>

            {(isAlreadySearched && (!data || data?.length === 0) && !isLoading) ? (
                <styled.EmptyContainer>

                    <styled.Lottie>
                        {/* <MaskedGradient size={{h:70, w:70}}>
                            <styled.Icon name='close-circle-sharp' size={70} isBlack/>
                        </MaskedGradient> */}
                        <LottieView
                            style={styled.LottieStyle} 
                            source={require('../../../assets/lottie/41357-github-dark-mode.json')} 
                            autoPlay loop />
                    </styled.Lottie>

                    <styled.EmptyText>Nenhum repositório encontrado</styled.EmptyText>
                    <styled.EmptyText>Tente novamente com um termo diferente.</styled.EmptyText>

                </styled.EmptyContainer>
                ) : (
                <styled.SearchContent>

                    <FlatList 
                        style={{width: '100%'}}
                        keyExtractor={item => String(item.id)}
                        onEndReached={nextPageSearch}
                        onEndReachedThreshold={0.4}
                        renderItem={memoItem}
                        data={data}
                    />

                </styled.SearchContent>
            )}

            {isLoading ? (
                <styled.Loading>Loading...</styled.Loading>
            ) : null }

        </styled.Container>
    )
}

export default Search