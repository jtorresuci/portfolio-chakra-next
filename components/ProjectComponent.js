import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProjectComponent = ({projectTitle, projectDescription, projectImage}) => {
  return (
<VStack>
              <Image borderRadius={"30px"} w="200px" src={projectImage}/>
          <Heading >{projectTitle}</Heading>
              <Text p="1rem">{projectDescription}</Text>
          </VStack>
  )
}

export default ProjectComponent