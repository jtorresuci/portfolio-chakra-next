import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Navbarv2 from '../components/Navbarv2'
import NFTProvider from '../context/NFTContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NFTProvider>
      <ChakraProvider>
        <Navbarv2/>
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
    </NFTProvider>
  )
}

export default MyApp
