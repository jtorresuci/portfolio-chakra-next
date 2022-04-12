import { Button, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProjectComponent = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectLink
}) => {
  return (
    <VStack>
      <Image borderRadius={"30px"} w="200px" src={projectImage} />
      <Heading>{projectTitle}</Heading>
      <Text p="1rem">{projectDescription}</Text>
      <Button borderRadius={"full"} href={projectLink}>Live Site</Button>
    </VStack>
  );
};

export default ProjectComponent;
