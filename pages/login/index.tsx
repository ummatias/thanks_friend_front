import { Box, Button, Link } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import type { GetServerSideProps, NextPage } from 'next'
import NextLink from 'next/link'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import FormItem from '../../components/formItem'
import { AuthContext } from '../../contexts/AuthContext'
import { getAPIClient } from '../../services/axios'
import { Container, FormContainer, LandingImage, Subtitle, Title, TitlesContainer } from './styles'

const LoginPage: NextPage = () => {

    const { signIn } = useContext(AuthContext)

    const handleSubmit = async (data: any) => {
        await signIn(data)
    }

    return (
        <Container>
            <FormContainer>
                <TitlesContainer>
                    <Title>Welcome Back</Title>
                    <Subtitle>Please enter your details</Subtitle>
                </TitlesContainer>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                >
                    {(props:any) => (
                        <Form>
                            <Box width={'20rem'} height={'12.5rem'} display='flex' flexDirection='column' justifyContent='space-between'>
                                <FormItem fieldName='email' placeholder='Email' type='input'/>
                                <FormItem fieldName='password' placeholder='Password' type='password'/>
                                <NextLink href={'/'}><Link textAlign={'right'} fontSize='0.8rem' color='#1C5D65' fontWeight='bold'>Forgot Password</Link></NextLink>
                                <Button type='submit' colorScheme="teal" variant="solid" width={'100%'}>Login</Button>                                                             
                            </Box>

                        </Form>
                    )}
                </Formik>
            </FormContainer>
            <LandingImage src='/game_day_amico.svg' />
        </Container>
    )
}

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['nextauth.token']: token } = parseCookies(ctx)
  
    if (token) {
      return {
        redirect: {
          destination: '/decks',
          permanent: false,
        }
      }
    }
    
    return {
      props: {}
    }
}