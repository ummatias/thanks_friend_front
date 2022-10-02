import { ParsedUrlQuery } from "querystring";
import { DeckInfoRequest } from "../types/types";
import { post, get, put, del } from "../util/fetchWrapper";

const baseUrl = "http://localhost:8080";


const deckService = {
    getDecks:  async () => {
        try {
            const data = fetch(
                `${baseUrl}/decks/${sessionStorage.getItem("userId")}`,
                { 
                    method: 'GET', 
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Accept': 'application/json', 
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}` 
                }});
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    getDeck: async (id: string) => {
        try {
            console.log(id);
            const data = fetch(
                `${baseUrl}/deck/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                });
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    addDeck:  async (deck: DeckInfoRequest) => {
        try {
            const data = await fetch(
                `${baseUrl}/deck`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify(deck),
                },

                );
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
}

export default deckService;