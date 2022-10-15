import { api } from "./api";

const cardService = {
  createCard: async (card: any) => {
    try {
      const response = await api.post(`/card`, card);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCards: async (deckId: string, logged: boolean) => {
    console.log(deckId);
    try {
      const response = await api.get(
        logged ? `/cards/${deckId}` : `/cards/public/${deckId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCard: async (id: string) => {
    try {
      const response = await api.get(`/card/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  updateCard: async (card: any) => {
    try {
      const response = await api.put(`/card`, card);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteCard: async (id: string) => {
    try {
      const response = await api.delete(`/card/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default cardService;
