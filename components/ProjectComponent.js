import { Button, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProjectComponent = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectLink,
  buttonText
}) => {

  const redirect = () => {
    const url = projectLink;
    window.open(url, "_blank");
  };

let newLink = "location.href='"+ {projectLink} + "'"
  return (
    <VStack>
      <Image borderRadius={"30px"} w="200px" src={projectImage} />
      <Heading>{projectTitle}</Heading>
      <Text p="1.5rem">{projectDescription}</Text>
      <Button borderRadius={"full"}               onClick={redirect}
>{buttonText}</Button>
    </VStack>
  );
};

export default ProjectComponent;
