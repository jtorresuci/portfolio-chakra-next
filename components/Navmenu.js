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

//   const {isMenuOpen, closeMenu  } = useContext(ShopContext);

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
              <Link href="/"><Text as='u' cursor="pointer">Home</Text></Link>
              <Link href="/mint"><Text cursor="pointer">Mint</Text></Link>

              <Link href="/traits"><Text cursor="pointer">Traits</Text></Link>
              <Link href="/gallery"><Text cursor="pointer">Gallery</Text></Link>
              <Link href="/merchandise"><Text cursor="pointer">Merchandise</Text></Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign={"center"}>
            © 2021 Goth Chick Clique. All Rights Reserved
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;