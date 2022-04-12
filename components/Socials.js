import React from 'react'
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaLink} from 'react-icons/fa'


const twitterHandle ="https://twitter.com/asapnomad"
const igHandle ="https://instagram.com/asapnomad"
const linkedInHandle ="https://www.linkedin.com/in/jose-torres-240851183/"
// const openseaHandle ="https://instagram.com/sa"

const hoverColor ="white"
const hoverBackgroundcolor ="red"

const Socials = (props, ButtonGroupProps) => {
    return (
        <ButtonGroup     
        variant="ghost" color="black" {...props}>
        {/* <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin size="20px" />} />x */}
        {/* <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub size="20px" />} /> */}
        <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={twitterHandle} aria-label="Twitter" icon={<FaTwitter size="20px" />} />
        {/* <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={openseaHandle} aria-label="Link" icon={<FaLink size="20px" />} /> */}

        <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={igHandle} aria-label="Instagram" icon={<FaInstagram size="20px" />} />
            {/* <IconButton as="a" href={igHandle} aria-label="Instagram" icon={<FaInstagram size="20px" />} /> */}
            <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={linkedInHandle} aria-label="LinkedIn" icon={<FaLinkedin size="20px" />} />

      </ButtonGroup>
    )
}

export default Socials