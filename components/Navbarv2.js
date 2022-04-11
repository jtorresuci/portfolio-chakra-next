import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import React from "react";
import Socials from "./Socials";

const Navbarv2 = () => {
  return (
    <Flex
      p="2rem"
      as="header"
      w="100%"
      flexDir={"row"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <VStack>
        <Box>Jose Torres</Box>
        <Box>Full-Stack Developer</Box>
      </VStack>
      <Flex
        flexDir={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        w="30%"
      >
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contacts</Link>
          <Link>Experience</Link>
      </Flex>
      <Socials/>
    </Flex>
  );
};

export default Navbarv2;
