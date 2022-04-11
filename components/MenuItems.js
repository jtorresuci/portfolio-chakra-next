import React from 'react'

const MenuItems = () => {
  return (
    <Box><Link href="/"><Text as='u' cursor="pointer">Home</Text></Link>
              <Link href="/mint"><Text cursor="pointer">Mint</Text></Link>

              <Link href="/traits"><Text cursor="pointer">Traits</Text></Link>
              <Link href="/gallery"><Text cursor="pointer">Gallery</Text></Link>
              <Link href="/merchandise"><Text cursor="pointer">Merchandise</Text></Link></Box>
  )
}

export default MenuItems