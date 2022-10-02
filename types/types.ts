import { NextResponse, NextRequest } from "next/server";

export interface UserInfoRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface DeckInfoRequest {
  name: string;
  userId: string | null;
  game: string;
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