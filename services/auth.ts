import { api } from "./api";

type SignInRequestData = {
  email: string;
  password: string;
}

export async function signInRequest(data: SignInRequestData) {
    const { email, password } = data;
    const response = await api.post('/login', {
        email,
        password,
    });
    return response.data;
}