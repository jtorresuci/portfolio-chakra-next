import { Box, Flex, Icon, Link, VStack } from "@chakra-ui/react";
import React, { useState, useEffect, useContext} from 'react'
import Socials from "./Socials";
import { MdMenu, MdShoppingBasket, MdShoppingCart } from "react-icons/md";
import { NFTContext } from "../context/NFTContext";
import Name from "./Name";


const Navbarv2 = () => {
    const [mobile, setMobile] = useState(undefined)
    useEffect(() => {
        const updateMobile = () => {
          setMobile(window.innerWidth < 1000 ? true : false)
          console.log(window.innerWidth)
        }
        updateMobile()
        window.addEventListener('resize', updateMobile)
        return () => {
          window.removeEventListener('resize', updateMobile)
        }
      }, [])
      
      const { openMenu } = useContext(NFTContext);

    
  return typeof mobile !== 'undefined' ? (
    mobile ? (
    <Flex
      p="2rem"
      as="header"
      w="100%"
      flexDir={"row"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Name/>
      <Flex
        flexDir={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        w="30%"
      >
          <Icon
        fill="brand.100"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />
      </Flex>
      <Socials/>
    </Flex>
  ) : (<Flex
    p="2rem"
    as="header"
    w="100%"
    flexDir={"row"}
    justifyContent="space-between"
    alignItems={"center"}
  >
    <Name/>
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
  </Flex>) ) :null
};

export default Navbarv2;
