import { React, useContext } from "react";
import Link from "next/link";

import { NFTContext } from "../context/NFTContext";

import {
  Text,
  Image,
  Grid,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
} from "@chakra-ui/react";


const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(NFTContext);

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent bgColor={"brand.900"} textColor={"brand.100"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem" fontWeight={"bold"}>
              <Link href="/"><Text as='u' cursor="pointer">Jose G. Torres Jr.</Text></Link>
              <Link href="/about"><Text cursor="pointer">Aboust</Text></Link>

              <Link href="/projects"><Text cursor="pointer">Projects</Text></Link>
              <Link href="/contact"><Text cursor="pointer">Contact</Text></Link>
              {/* <Link href="/merchandise"><Text cursor="pointer">Merchandise</Text></Link> */}
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign={"center"}>
            © Jose Torres Contact for inquiries: jtorresuci@gmail.com
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;