import { AddIcon, CopyIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  GridItem,
  HStack,
  SimpleGrid,
  Spinner,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import AddModal from "../../components/addModal";
import CardPost from "../../components/cardPost";
import FormItem from "../../components/formItem";
import { AuthContext } from "../../contexts/AuthContext";
import { getAPIClient } from "../../services/axios";

import cardService from "../../services/cardService";
import deckService from "../../services/deckService";
import { Cards, Deck } from "../../types/types";
import { Title } from "./styles";

const DeckPage = ({ query }: { query: any }) => {
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deck, setDeck] = useState<Deck>({} as Deck);
  const [cards, setCards] = useState<Cards>([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleAddCard = (data: any) => {
    cardService
      .createCard({ text: data.text, color: data.color, deckId: deck.id })
      .then((res) => {
        setCards([...cards, res.card]);
        onClose();
      });
  };

  const handleDeleteCard = (id: string) => {
    cardService.deleteCard(id).then(() => {
      setCards(cards.filter((card) => card.id !== id));
    });
  };

  const handleDeleteDeck = () => {
    deckService.deleteDeck(deck.id).then(() => {
      router.push("/decks");
    });
  };

  useEffect(() => {
    if (query?.id) {
      deckService.getDeck(query.id, !!user?.id).then((res) => {
        setDeck(res.deck);
      });

      cardService.getCards(query.id, !!user?.id).then((res) => {
        setCards(res.cards);
        setLoading(false);
        console.log(res.cards);
      });
    } else {
      router.push("/decks");
    }
  }, []);

  return (
    <Flex direction={"column"} align={"center"} justify={"center"}>
      <HStack
        w="100%"
        justifyContent={["center", "space-between"]}
        paddingX={["1rem", "4rem", "10rem", "12rem"]}
      >
        <Title>{deck.name}</Title>
        <HStack>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`${deck.id}`);
            }}
            colorScheme="teal"
            w="2.5rem"
            h="2.5rem"
            rounded="full"
          >
            <CopyIcon />
          </Button>
          {user?.id === deck.userId && (
            <>
              <Button
                onClick={onOpen}
                colorScheme="teal"
                w="2.5rem"
                h="2.5rem"
                rounded="full"
              >
                <AddIcon />
              </Button>

              <Button
                onClick={handleDeleteDeck}
                colorScheme="teal"
                w="2.5rem"
                h="2.5rem"
                rounded="full"
              >
                <DeleteIcon />
              </Button>
            </>
          )}
        </HStack>
      </HStack>
      {isLoading ? (
        <Spinner size="xl" color="teal" marginTop="5rem" />
      ) : (
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          w="100%"
          paddingX={["1rem", "2rem", "4rem", "12rem"]}
        >
          {cards.length > 0
            ? cards.map((card, index) => (
                <GridItem key={index} w="100%" padding="0 2rem">
                  <CardPost
                    text={card.text}
                    color={card.color}
                    id={card.id}
                    onDelete={handleDeleteCard}
                    owner={user?.id === deck.userId}
                  />
                </GridItem>
              ))
            : null}
        </SimpleGrid>
      )}
      <AddModal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", color: "#1C5D65" }}
          onSubmit={handleAddCard}
        >
          {(props: any) => (
            <Form>
              <Box
                width={"100%"}
                padding={6}
                height={"100%"}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Stack spacing={2} direction="row" w="100%">
                  <Stack spacing={2} direction="column" w="100%">
                    <Field name="text">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.text && form.touched.text}
                        >
                          <Textarea
                            type="text"
                            {...field}
                            placeholder="Card Text"
                            _placeholder={{ color: "#1C5D65" }}
                            focusBorderColor="#1C5D65"
                            colorScheme={"teal"}
                            variant="flushed"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <FormItem
                      fieldName="color"
                      placeholder="Card Color"
                      type="color"
                    />
                    <Stack
                      spacing={4}
                      direction="row"
                      marginTop="1rem"
                      justifyContent="flex-end"
                    >
                      <Button
                        onClick={onClose}
                        colorScheme="teal"
                        variant="outline"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" colorScheme="teal" variant="solid">
                        Continue
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </AddModal>
    </Flex>
  );
};

export default DeckPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  return {
    props: { query: ctx.query },
  };
};
