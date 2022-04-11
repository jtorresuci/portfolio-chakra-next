import { Box, Center, Circle, Icon, Image } from "@chakra-ui/react";
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

const ImageAndText = ({ typeOfContact, contactInfo }) => {
  let contactImage = undefined;

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
      break;
    case "Twitter:":
      contactImage = FaTwitter;
      break;
  }

  return (
    <Box p="2rem">
      <Center>
        <Circle size="80px" bg="tomato" color="white">
          {" "}
          <Icon w={10} h={10} as={contactImage} />
        </Circle>
      </Center>
      <Center>
        {" "}
        <Box pt="1rem">{typeOfContact} &nbsp;</Box>
        <Box pt="1rem">{contactInfo}</Box>
      </Center>
    </Box>
  );
};

export default ImageAndText;
