import { Box, Link, VStack } from '@chakra-ui/react'
import React from 'react'
const hoverBackgroundcolor ="red"


const Name = () => {
  return (
<VStack fontWeight={'bold'}>
      <Link _hover={{ color: hoverBackgroundcolor  }} href='/'>Jose Torres Jr.</Link>
      <Box>Full-Stack Developer</Box>
    </VStack>
  )
}

export default Name