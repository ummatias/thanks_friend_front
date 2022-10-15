export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface DeckInfoRequest {
  name: string;
  userId: string | undefined;
  game: string;
  public: boolean;
}

export interface Deck {
  id: string;
  name: string;
  createdAt: string;
  public: boolean;
  game: string;
  userId: string;
}

export interface Decks extends Array<Deck> {}
export interface CardInfoRequest {
  text: string;
  deckId: string;
  color: string;
}

export interface Card {
  id: string;
  text: string;
  color: string;
  deckId: string;
  createdAt: string;
}

export interface Cards extends Array<Card> {}
