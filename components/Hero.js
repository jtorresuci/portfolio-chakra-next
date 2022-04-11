import { Box, Center, Grid, GridItem, Image, VStack } from '@chakra-ui/react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import React from 'react'
import { RainbowHighlight } from './RainbowHighlight';

const Hero = () => {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
<Grid templateColumns='repeat(2, 1fr)' gap={10}>
<VStack align={"left"}>
<RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
          <Box fontSize={100}>DEVELOPER</Box>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
          <Box fontSize={100}>DESIGNER</Box>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
          <Box fontSize={100}>PROGRAMMER</Box>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
          <Box fontSize={100}>CREATOR</Box>
          </RainbowHighlight>
       </RoughNotationGroup>
</VStack>
<Center><Image             borderRadius="full"
 src="burb.png"/>
</Center>
</Grid>
  )
}

export default Hero