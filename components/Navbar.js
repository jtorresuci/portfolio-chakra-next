import React, { useContext } from "react";
import { Flex, Center, Box, Badge, Icon, Image, Text } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket, MdShoppingCart } from "react-icons/md";
import { NFTContext } from "../context/NFTContext";
import Link from "next/link";
import Socials from "./Socials";
const logoImg =
  "ether-formula.png";
const NavBar = () => {
  const { openMenu } = useContext(NFTContext);

  return (
    <Flex
      as="header"
    //   position="fixed"
      w="100%"
      //   backgroundColor="black"
      backgroundColor="brand.900"
      flexdir="row"
      justifyContent={"space-between"}
      //   justifyContent={"space-between"}

      alignItems={"center"}
      p="2rem"
    >
      <Icon
        fill="brand.100"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />

      <Link href="/">
        <Image placeholder="blur"
          alt="image" pl="6rem" src={logoImg} w={300} cursor={"pointer"} />
      </Link>

      <Socials />
    </Flex>
  );
};

export default NavBar;