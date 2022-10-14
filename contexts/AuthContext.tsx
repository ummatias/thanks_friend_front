import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";
import { recoverUserInformation, signInRequest } from "../services/auth";

type User = {
  name: string;
  email: string;
  id: string;
  createdAt: string;
} | null;

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children } : { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation(token).then((response : any)  => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 6, // 6 hours
    })
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setUser(user)
    Router.push('/decks');
  }

  async function signOut() {
    setUser(null)
    setCookie(undefined, 'nextauth.token', '', {
      maxAge: -1,
    })
    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}