import { Button, Box, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import userService from '../../services/userService'
import { Container,  FormContainer, TitlesContainer, Title, Subtitle, LandingImage } from './styles'
import FormItem from '../../components/formItem'

const LoginPage: NextPage = () => {

    const handleSubmit = async (data: any) => {
        const user = await userService.login(data)
        if (user) {
            window.location.href = '/decks'
        }
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

export default LoginPage                    