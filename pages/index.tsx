import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Container, Desc, Title, Subtitle, LandingImage } from './styles'

const LandingPage: NextPage = () => {

    

    return (
        <Container>
            <Desc>
                <Title>Gaming All</Title>
                <Subtitle>
                    Create multiple decks for different
                    games and share them with the community
                </Subtitle>
                <Button colorScheme='teal' w="18rem">Community Decks</Button>
            </Desc>
            <LandingImage src="./gama_day_cuate.svg" alt="Game Day" />
        </Container>
    )
}

export default LandingPage