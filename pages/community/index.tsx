import { Flex, GridItem, HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import DeckPost from "../../components/deckPost";
import { AuthContext } from "../../contexts/AuthContext";
import { getAPIClient } from "../../services/axios";
import deckService from "../../services/deckService";
import { Decks } from "../../types/types";
import { Title } from "./styles";

const CommunityPage: NextPage = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState<Decks>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    deckService.getDecks(undefined, true).then((res) => {
      setData(res.decks);
      setLoading(false);
    });
  }, []);

  return (
    <Flex direction={"column"} align={"center"} justify={"center"}>
      <HStack
        w="100%"
        justifyContent={["center", "space-between"]}
        paddingX={["1rem", "4rem", "10rem", "12rem"]}
      >
        <Title>Community Decks</Title>
      </HStack>
      {loading ? (
        <Spinner size="xl" color="teal" marginTop="5rem" />
      ) : (
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          w="100%"
          paddingX={["1rem", "2rem", "4rem", "12rem"]}
        >
          {data.length > 0
            ? data.map((deck, index) => (
                <GridItem key={index} w="100%" padding="0 2rem">
                  <DeckPost
                    deckName={deck.name}
                    game={deck.game}
                    deckId={deck.id}
                    owner=""
                  />
                </GridItem>
              ))
            : null}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default CommunityPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  return {
    props: {},
  };
};
