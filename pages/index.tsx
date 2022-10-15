import { Button } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { getAPIClient } from "../services/axios";
import Container, { Desc, LandingImage, Subtitle, Title } from "./styles";

const LandingPage: NextPage = () => {
  return (
    <Container>
      <Desc>
        <Title>Gaming All</Title>
        <Subtitle>
          Create multiple decks for different games and share them with the
          community
        </Subtitle>
        <Link href={"/community"}>
          <Button colorScheme="teal" w="18rem">
            Community Decks
          </Button>
        </Link>
      </Desc>
      <LandingImage src="./gama_day_cuate.svg" alt="Game Day" />
    </Container>
  );
};

export default LandingPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/decks",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
