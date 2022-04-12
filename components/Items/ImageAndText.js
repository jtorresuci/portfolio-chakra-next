import { Box, Center, Circle, Icon, Image, LinkBox, VStack } from "@chakra-ui/react";
import React from "react";
import {
  MdCalendarToday,
  MdEmail,
  MdPhone,
  MdReceipt,
  MdSocialDistance,
  MdVideoCall,
} from "react-icons/md";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLink,
  FaSkype,
} from "react-icons/fa";
import Link from "next/link";
const hoverBackgroundcolor ="red"

const ImageAndText = ({ typeOfContact, contactInfo, linkDetails }) => {
  let contactImage = undefined;
  let isLink = false;

  switch (typeOfContact) {
    case "Phone:":
      contactImage = MdPhone;
      break;
    case "Email:":
      contactImage = MdEmail;
      break;

    case "Project Planner:":
      contactImage = MdCalendarToday;
      break;

    case "Skype:":
      contactImage = FaSkype;
      isLink=true;
      
      break;
    case "Twitter:":
      contactImage = FaTwitter;
      isLink = true
      break;
  }

  return (
    <Box p="2rem">
      <Center>
        <Circle size="80px" bg="red" color="white">
          {" "}
          <Icon w={10} h={10} as={contactImage} />
        </Circle>
      </Center>
      <Center>
        {" "}
        <VStack>
        <Box pt="1rem">{typeOfContact} &nbsp;</Box>
        {
            isLink ? <Link _hover={{ color: hoverBackgroundcolor  }} href={contactInfo}>{linkDetails}</Link> : <Box>{contactInfo}</Box>
        }
        </VStack>
        
      </Center>
    </Box>
  );
};

export default ImageAndText;
