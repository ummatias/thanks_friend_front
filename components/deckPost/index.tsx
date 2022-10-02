import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import Link from 'next/link';
import Banner from '../Banner';
  
  export const DeckPost = ({ deckName, author, game, deckId } : { deckName: string, author: string, game: string, deckId: string}) => {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Banner game={game} h='120px' w='full' />
  
          <Box p={6}>
            <Stack spacing={0} align={'center'}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {deckName}
              </Heading>
              <Text color={'gray.500'}>{author}</Text>
            </Stack>

            <Link href={{ pathname: '/decks/[id]', query: {id: deckId }}}>
              <Button
                w={'full'}
                mt={8}
                colorScheme={'teal'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                See
              </Button> 
            </Link>
          </Box>
        </Box>
      </Center>
    );
  }

export default DeckPost