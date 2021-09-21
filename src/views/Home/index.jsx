import React from 'react'
import * as styled from './style'
import Header from '../../components/Header'
import Languages from '../../../assets/icons'
import { ActivityIndicator } from 'react-native'
import MaskedGradient from '../../components/MaskedGradient'


const trending = require('trending-github')

function Logo({language, color, size}) {
    const Icon = Languages[language].icon
    return ( <Icon color={color} height={size} width={size}/> )
}

export function Home() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState('')
  
  React.useEffect(() => {
    // setIsLoading(true)
    async function fetchFeed() {
        try {
            const feed = await trending('today', '')
            // console.log(feed)
            setData(feed)
            // setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    fetchFeed()
  },[])

  function ActivityRender() {
      return (
        <styled.ActivityContent>
            <ActivityIndicator size="large" color={styled.ActivityIndicatorColor} />
        </styled.ActivityContent>
      )
  }

  function Card(props) {
      return (
        <styled.CardContainer> 
            
            <styled.CardHeader>

                <styled.Author>juice-shop</styled.Author>

                <styled.RowContent direction='right'>
                    <styled.Icon name='star-outline' size={15} color={styled.StarIconColor} />
                    <styled.Counter>3624</styled.Counter>
                    <styled.Icon name='git-branch' size={15} color={styled.ForkIconColor} />
                    <styled.Counter>3624</styled.Counter>
                </styled.RowContent>

            </styled.CardHeader>

            <styled.RowContent>

                <styled.Logo>
                    <MaskedGradient size={{h:130, w:130}}>
                        <Logo language='Python' size={130}/>
                    </MaskedGradient>
                    <styled.ProjectName>DiscordBot</styled.ProjectName>
                </styled.Logo>

                <styled.InfoContainer>
                    
                    <styled.InfoContent>

                        <styled.InfoTitle>Descrição</styled.InfoTitle>
                        <styled.InfoDescription>OWASP Juice Shop: Probably the most modern and sophisticated insecure web application</styled.InfoDescription>

                        <styled.InfoTitle>Linguagem</styled.InfoTitle>
                        <styled.InfoDescription>Python</styled.InfoDescription>

                    </styled.InfoContent>
                    
                </styled.InfoContainer>

            </styled.RowContent>

        </styled.CardContainer>
      )
  }

  return (
    <styled.Container>
        
        <Header />

        <styled.Container>
        { isLoading 
            ? <ActivityRender />
            : <Card /> }
        </styled.Container>

    </styled.Container>
  )
}

export default Home