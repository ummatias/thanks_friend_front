import { Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import { Container } from "../styles"
import Banner from "../../components/Banner"
import deckService from "../../services/deckService"
import { Title } from "./styles"
import { Deck } from "../../types/types"

const DeckPage = () => {
    
    const router = useRouter()
    const { id } = router.query as { id: string }

    const [deck, setDeck] = useState<Deck>({} as Deck)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        deckService.getDeck(id).then((res) => res ? res.json() : [])
            .then((data) => {
                setDeck(data.deck)
                setLoading(false)
                console.log(deck)
            }
        )
    }, [])

    return (
        <Container>
            <Title>{deck.name}</Title>
            
        </Container>
    )   
}

export default DeckPage

