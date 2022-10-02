import { UserInfoRequest, UserLoginRequest } from "../types/types";

const userService = {
  create: async (data: UserInfoRequest) => {
    try {
      const url = `http://localhost:8080/user`;
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

  getUser: async () => {
    try {
      const url = `http://localhost:8080/user/${sessionStorage.getItem(
        "userId"
      )}`;
      const user = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

export default userService;
