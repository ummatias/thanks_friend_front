import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return api;
}

