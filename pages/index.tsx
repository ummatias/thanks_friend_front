import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { getAPIClient } from "../services/axios";

const LandingPage: NextPage = () => {
  return (
    <Flex
      direction={["column", "row"]}
      paddingX={["0rem", "12rem"]}
      marginBottom={[0, "15rem"]}
      align="center"
      justify={["space-around", "space-between"]}
      h="80%"
    >
      <Flex
        direction="column"
        justify={"center"}
        align={"center"}
        gap={4}
        w={["100%", "20rem", "25rem"]}
      >
        <Heading
          fontFamily={`'Poppins', sans-serif`}
          fontWeight={"900"}
          color={"teal"}
          size={"2xl"}
        >
          Gaming All
        </Heading>
        <Text
          fontFamily={`'Roboto', sans-serif`}
          color={"teal"}
          textAlign={"center"}
          fontSize="xl"
        >
          Create multiple decks for different games and share them with the
          community
        </Text>
        <Link href={"/community"}>
          <Button colorScheme="teal" w="18rem">
            Community Decks
          </Button>
        </Link>
      </Flex>
      <Image src="./gama_day_cuate.svg" alt="Game Day" w={["46rem"]} />
    </Flex>
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
