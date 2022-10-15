import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import { useContext } from "react";
import FormItem from "../../components/formItem";
import { AuthContext } from "../../contexts/AuthContext";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../util/validation";
import {
  Container,
  FormContainer,
  LandingImage,
  Subtitle,
  Title,
  TitlesContainer,
} from "./styles";

const SignupPage: NextPage = () => {
  const { signUp } = useContext(AuthContext);

  return (
    <Container>
      <FormContainer>
        <TitlesContainer>
          <Title>Create an Account</Title>
          <Subtitle>Please enter your details</Subtitle>
        </TitlesContainer>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={signUp}
        >
          {(props: any) => (
            <Form>
              <Box
                width={"20rem"}
                height={"16rem"}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <FormItem
                  fieldName="name"
                  placeholder="Name"
                  validateFunction={validateName}
                  type="input"
                />
                <FormItem
                  fieldName="email"
                  placeholder="Email"
                  validateFunction={validateEmail}
                  type="input"
                />
                <FormItem
                  fieldName="password"
                  placeholder="Password"
                  validateFunction={validatePassword}
                  type="password"
                />
                <Button
                  type="submit"
                  colorScheme="teal"
                  variant="solid"
                  width={"100%"}
                >
                  Create Account
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <LandingImage src="/game_day_amico.svg" />
    </Container>
  );
};

export default SignupPage;
