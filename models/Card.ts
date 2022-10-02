import Deck from "./Deck";

interface Card {
  id: string;
  createdAt: Date;
  text: string;
  color: string;
  Deck: Deck;
  deckId: string;
}

export default Card;
