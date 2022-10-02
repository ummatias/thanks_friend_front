import Card from "./Card";

interface User {
  id: string;
  createdAt: Date;
  public: boolean;
  name: string;
  cards: Card[];
}

export default User;
