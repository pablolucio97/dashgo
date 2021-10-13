import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SidebarDrawerProvider>
            <ChakraProvider resetCSS={false} theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </SidebarDrawerProvider>
    )
}

export default MyApp