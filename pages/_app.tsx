import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout logged={false}>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp