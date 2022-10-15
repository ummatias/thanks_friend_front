import { Grid, GridItem, HStack, Spinner } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import DeckPost from "../../components/deckPost";
import { AuthContext } from "../../contexts/AuthContext";
import { getAPIClient } from "../../services/axios";
import deckService from "../../services/deckService";
import { Decks } from "../../types/types";
import { Container, Title } from "./styles";

const CommunityPage: NextPage = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState<Decks>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    deckService.getDecks(undefined, true).then((res) => {
      console.log(res);
      setData(res.decks);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <HStack
        w="100%"
        justifyContent="center"
        marginTop="4rem"
        padding="0 2rem"
      >
        <Title>Community Decks</Title>
      </HStack>
      {loading ? (
        <Spinner size="xl" color="teal" marginTop="5rem" />
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" w="100%">
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
        </Grid>
      )}
    </Container>
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
