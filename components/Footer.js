import React, { useContext } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Box,
  Text,
  Image,
  VStack,
  Heading,
} from "@chakra-ui/react";

import Link from "next/link";
import Socials from "./Socials";
const logoImg = "visitor.png";

const hoverColor = "red";
const hoverBackgroundcolor = "red";
const linkColors = "white";

const Footer = () => {
  return (
    <Box backgroundColor="brand.900" pb="7rem" pt="3rem" pl="3rem">
      <Grid templateColumns={["repeat(1,1fr)", "repeat(2, 1fr)"]}>
        <Box>
          <Image
            src={logoImg}
            w="100px"
            placeholder="blur"
            borderRadius="full"
            alt="image"

          />
          <Text>© 2021 Jose Torres. All Rights Reserved</Text>
          <Socials />
        </Box>
        <Breadcrumb>
          <VStack p="2rem">
            <Text fontWeight={"bold"}> Navigation</Text>

            <BreadcrumbItem>
              <BreadcrumbLink
                _hover={{ color: hoverBackgroundcolor }}
                href="/about"
              >
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                _hover={{ color: hoverBackgroundcolor }}
                href="/projects"
              >
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                _hover={{ color: hoverBackgroundcolor }}
                href="/contact"
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink color={linkColors} _hover={{ color: hoverBackgroundcolor  }} href='#'>Experience</BreadcrumbLink>
  </BreadcrumbItem> */}
          </VStack>
        </Breadcrumb>
        {/* <Heading fontWeight={"bold"} textAlign={"right"}>
            Navigation
          </Heading>
          <Link     _hover={{ fontWeight: 'bold' }}
	 href="/">
              Home
          </Link>
          <Link href="/mint">Mint</Link>
Mint
          <Link 
          href="/traits">Traits</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/merchandise">Merchandise</Link> */}
      </Grid>
    </Box>
  );
};

export default Footer;
