import type { NextPage } from 'next'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { Container,  FormContainer, TitlesContainer, Title, Subtitle, LandingImage } from './styles'
import userService from '../../services/userService'
import { validateEmail, validatePassword, validateName } from '../../util/validation'
import FormItem from '../../components/formItem'

const SignupPage: NextPage = () => {

    const handleSubmit = async (data: any) => {
        return await userService.create(data)
    }

    return (
        <Container>
            <FormContainer>
                <TitlesContainer>
                    <Title>Create an Account</Title>
                    <Subtitle>Please enter your details</Subtitle>
                </TitlesContainer>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                >
                    {(props:any) => (
                        <Form>
                            <Box width={'20rem'} height={'16rem'} display='flex' flexDirection='column' justifyContent='space-between'>
                                <FormItem fieldName='name' placeholder='Name' validateFunction={validateName} type='input'/>
                                <FormItem fieldName='email' placeholder='Email' validateFunction={validateEmail} type='input'/>
                                <FormItem fieldName='password' placeholder='Password' validateFunction={validatePassword} type='password'/>
                                <Button type='submit' colorScheme="teal" variant="solid" width={'100%'}>Create Account</Button>                                                             
                            </Box>

                        </Form>
                    )}
                </Formik>
                    
            </FormContainer>
            <LandingImage src='/game_day_amico.svg' />
        </Container>
    )
}

export default SignupPage