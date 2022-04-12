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
            <ImageAndText typeOfContact={"Phone:"} contactInfo={"949-228-9443"}/>
            {/* <ImageAndText typeOfContact={"Project Planner:"} contactInfo={"Website Planner Link"} /> */}
            <ImageAndText typeOfContact={"Skype:"} linkDetails={"Click to Connect"} contactInfo={"https://join.skype.com/invite/ldxGcXk7Hmbu"}/>
            <ImageAndText typeOfContact={"Twitter:"} linkDetails={"@asapnomad"} contactInfo={"https://twitter.com/asapnomad"} />
        </Flex>
          </VStack>
        
      </Center>
    </Box>
  );
};

export default Contact;
