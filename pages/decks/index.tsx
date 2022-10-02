import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, Grid, GridItem, HStack, Icon, Select, Spinner, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import DeckPost from '../../components/deckPost'
import deckService from '../../services/deckService'
import { Container, Title } from './styles'
import AddModal from '../../components/addModal'
import { useDisclosure } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { validateName } from '../../util/validation'
import FormItem from '../../components/formItem'
import { GiCardPick } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import { Decks } from '../../types/types'

const LoginPage: NextPage = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState<Decks>([])
    const [isLoading, setLoading] = useState(false)

    const handleAddDeck = (deck: any) => {
        deckService.addDeck({ name: deck.name, game: deck.game, userId: sessionStorage.getItem('userId') })
        .then((res) => res ? res.json() : null)
        .then((res) => setData([...data, res.deck]))
        onClose()
    }

    useEffect(() => {
        setLoading(true)
        deckService.getDecks().then((res) => res ? res.json() : [])
            .then((data) => {
                setData(data)
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
            }
        )
    }, [])


    return (
        <Container>
            <HStack w='100%' justifyContent='space-between' marginTop='4rem' padding='0 2rem'>
                <Title>Your Decks</Title>
                <Button 
                onClick={onOpen}
                colorScheme="teal" w='2.5rem' h='2.5rem' rounded='full'>
                    <AddIcon />
                </Button>
            </HStack>
            {isLoading ? 

                <Spinner size='xl' color='teal' marginTop='5rem' />
            :
                <Grid templateColumns='repeat(3, 1fr)' w='100%'>
                    {data.length > 0 ? data.map((deck, index) => (
                        <GridItem key={index} w='100%' padding='0 2rem'>
                            <DeckPost deckName={deck.name} author={'Matias'} game={deck.game} deckId={deck.id} />
                        </GridItem>
                    )) 
                    : 
                    null}
                </Grid>
            }
            <AddModal isOpen={isOpen} onClose={onClose}>
                <Formik
                    initialValues={{ name: '', game: '' }}
                    onSubmit={handleAddDeck}
                >
                    {(props:any) => (
                        <Form>
                            <Box width={'100%'}  padding={6} height={'100%'} display='flex' flexDirection='column' justifyContent='space-between'>
                                <Stack spacing={2} direction='row' w='100%'>
                                    <Icon as={GiCardPick} color='white' bg='teal' w='2.5rem' h='2.5rem' padding='10px' rounded='full'/>
                                    <Stack spacing={2} direction='column' w='100%' >
                                        <FormItem fieldName='name' placeholder='Deck Name' validateFunction={validateName} type='input'/>
                                        <Field name='game'>
                                            {({ field, form }: any) => (
                                                <FormControl >
                                                    <Select 
                                                        variant='flushed'
                                                        focusBorderColor='#1C5D65'
                                                        placeholder="Game" w='100%'
                                                        marginTop='1rem'
                                                        _placeholder={{ color: '#1C5D65' }}
                                                        onChange={field.onChange}
                                                        id={field.name}
                                                        value={field.value}
                                                        key={field.value}
                                                    >
                                                        <option value="question">Question Game</option>
                                                        <option value="impact">Impact Game</option>
                                                        <option value="other">Other Game</option>
                                                    </Select>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Stack spacing={4} direction="row" marginTop='1rem' justifyContent='flex-end'>
                                            <Button onClick={onClose} colorScheme="teal" variant="outline">Cancel</Button>
                                            <Button type='submit' colorScheme="teal" variant="solid">Continue</Button>        
                                        </Stack>      
                                    </Stack>
                                </Stack>
                            </Box>

                        </Form>
                    )}
                </Formik>
            </AddModal>
            
        </Container>
    )
}

export default LoginPage                    