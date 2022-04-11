import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ImageAndText from "../components/Items/ImageAndText";


const Contact = () => {
  return (
    <Box p="2rem">
      <Center>
          <VStack>
          <Heading size="3xl">Contact</Heading>
          <Text p="2rem">
              Get in touch with me to get the ball rolling.
          </Text>
        <Flex>
            <ImageAndText typeOfContact={"Email:"} contactInfo={"jtorresuci@gmail.com"} />
            <ImageAndText typeOfContact={"Phone:"} contactInfo={"949-999-6666"}/>
            <ImageAndText typeOfContact={"Project Planner:"} contactInfo={"Website Planner Link"} />
            <ImageAndText typeOfContact={"Skype:"} contactInfo={"contact@skype.com"}/>
            <ImageAndText typeOfContact={"Twitter:"} contactInfo={"@asapnomad"} />
        </Flex>
          </VStack>
        
      </Center>
    </Box>
  );
};

export default Contact;
