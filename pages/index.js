import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Navbarv2 from '../components/Navbarv2'
import NavMenu from '../components/Navmenu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>

      <NavMenu/>
      <Hero/>
    </Box>
  )
}
