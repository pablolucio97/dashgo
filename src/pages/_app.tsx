import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import {QueryClientProvider, QueryClient} from 'react-query'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

if(process.env.NODE_ENV === 'development') {
    makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
            <ChakraProvider  theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </SidebarDrawerProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    )
}

export default MyApp