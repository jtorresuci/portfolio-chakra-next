import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectComponent from "../components/ProjectComponent";

const Projects = () => {
  return (
    <Box p="2rem">
      <Heading pb="3rem" size="3xl">
        Projects
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap="5"
      >
         <ProjectComponent
          projectImage={
            "ember.png"
          }
          projectTitle={"$EMBER Token"}
          projectLink={"https://polygonscan.com/token/0x7C30E650d71652b4e021BeE770caaf676FBcB8c0"}
          projectDescription={
            "Users can burn their NFTs to receive $EMBER. $EMBER will be redeemable in upcoming projects."
          }
          buttonText={"Live Contract"}
        />
        <ProjectComponent
          projectImage={"https://www.vidoozles.com/1.png"}
          projectTitle={"Vidoozles"}
          projectLink={"https://www.vidoozles.com"}
          projectDescription={
            "Users can exchange $MATIC for a Vidoozle ERC-721 token. ERC-721 tokens are burnable and redeemable for $EMBER. Art, and code written by me. This is a developing project. Released in Febrary, 2022."
          }
          buttonText={"Live Site"}

        />
        <ProjectComponent
          projectImage={
            "https://lh3.googleusercontent.com/rd0cWZr19zFY2u3fdMrCwuwBP0eOeIqLeOfdIKWOtZS6ZPo-iTfG67zr94yMK8bfB-2yOuRrhnn5R7fpHf85dpAniejsVpw_j2LKyWo=s0"
          }
          projectTitle={"Party Pumpkins"}
          projectLink={"http://partypumpkins.io"}
          projectDescription={
            "Users can exchange $MATIC for a Party Pumpkin ERC-721 token. Art, and code written by me. Released October 1, 2021."
          }
          buttonText={"Live Site"}

        />
        
       
      </Grid>
    </Box>
  );
};

export default Projects;
