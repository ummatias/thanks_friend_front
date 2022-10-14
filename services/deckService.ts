import { DeckInfoRequest } from "../types/types";
import { api } from "./api";

const deckService = {
  getDecks: async (
    userId: string | undefined,
    publicDeck: boolean | undefined
  ) => {
    try {
      const response = await api.get(
        publicDeck ? "/decks/public/" : `/decks/${userId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getDeck: async (id: string, logged: boolean) => {
    try {
      const response = await api.get(
        logged ? `/deck/${id}` : `/deck/public/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  addDeck: async (deck: DeckInfoRequest) => {
    try {
      const response = await api.post(`/deck`, deck);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteDeck: async (id: string) => {
    try {
      const response = await api.delete(`/deck/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default deckService;
