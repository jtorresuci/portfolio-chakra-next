import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectComponent from "../components/ProjectComponent";

const Projects = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      p="2rem"
    >
      <ProjectComponent
        projectImage={"https://www.vidoozles.com/1.png"}
        projectTitle={"Vidoozles"}
        projectDescription={
          "Users can exchange $MATIC for a Vidoozle ERC-721 token. ERC-721 tokens are burnable and redeemable for $EMBER. Art, and code written by me. This is a developing project. Released in Febrary, 2022."
        }
      />
      <ProjectComponent
        projectImage={
          "https://lh3.googleusercontent.com/rd0cWZr19zFY2u3fdMrCwuwBP0eOeIqLeOfdIKWOtZS6ZPo-iTfG67zr94yMK8bfB-2yOuRrhnn5R7fpHf85dpAniejsVpw_j2LKyWo=s0"
        }
        projectTitle={"Party Pumpkins"}
        projectDescription={
          "Users can exchange $MATIC for a Party Pumpkin ERC-721 token. Art, and code written by me. Released October 1, 2021."
        }
      />
   
    </Grid>
  );
};

export default Projects;
