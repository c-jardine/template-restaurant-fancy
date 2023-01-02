import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import BasicNavbar from '../src/components/navbars/BasicNavbar/BasicNavbar';
import { theme } from '../src/theme/index';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BasicNavbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
