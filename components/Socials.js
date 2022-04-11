import React from 'react'
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaLink} from 'react-icons/fa'


const twitterHandle ="https://twitter.com/gothgirlsnft"
const igHandle ="https://instagram.com/saintn.wtf"
const discordHandle ="https://discord.gg/pKm5MJeK"
const openseaHandle ="https://instagram.com/saintn.wtf"

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

        <IconButton _hover={{ bg: hoverBackgroundcolor, color: hoverColor  }} as="a" href={discordHandle} aria-label="Discord" icon={<FaDiscord size="20px" />} />
            {/* <IconButton as="a" href={igHandle} aria-label="Instagram" icon={<FaInstagram size="20px" />} /> */}

      </ButtonGroup>
    )
}

export default Socials