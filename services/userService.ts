import { UserInfoRequest } from "../types/types";

const userService = {
  create: async (data: UserInfoRequest) => {
    try {
      const url = process.env.BASE_URL || "http://localhost:8080";
      const user = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
