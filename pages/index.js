import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import NavMenu from '../components/Navmenu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>
      <Navbar/>
      <NavMenu/>
    <Box>Hello World!!!</Box>
    </Box>
  )
}
