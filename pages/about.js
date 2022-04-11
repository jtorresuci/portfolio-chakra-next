import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "react-icons/md";

import React from "react";
import Navbarv2 from "../components/Navbarv2";

const About = () => {
  return (
    <Box>
      <Flex p="2rem" flexDirection={"column"}>
        {" "}
        <Heading size="3xl">About Me</Heading>
        <Box pt="2rem" pb="1rem" pr="5rem">
          My name is Jose Torres I am a software developer from Orange County
          California. I am a continuing student at UCI. I only have 6 classes
          left to graduate which I plan on completing by Summer 2023.
        </Box>
        <Box>
          I am a fullstack web developer, with a diverse background. I
          specialize in web3 development. Here is a list of the languages and technology I've worked
          with. This list is constantly being updated as I take on new projects.{" "}
        </Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <List p="2rem">
            <ListItem>- Python</ListItem>
            <ListItem>- Solidity</ListItem>
            <ListItem>- Javascript</ListItem>
            <ListItem>- MySQL</ListItem>
            <ListItem>- C</ListItem>
            <ListItem>- Git version control</ListItem>
            <ListItem>- Agile Software</ListItem>
          </List>
          <List p="2rem">
            <ListItem>- NextJS</ListItem>
            <ListItem>- ReactJS</ListItem>

            <ListItem>- HTML</ListItem>
            <ListItem>- CSS</ListItem>
            <ListItem>- ChakraUI</ListItem>
            <ListItem>- Bootstrap</ListItem>
            <ListItem>- NodeJS</ListItem>
            <ListItem>- Unix Shell</ListItem>
          </List>
        </Grid>
      </Flex>
    </Box>
  );
};

export default About;
