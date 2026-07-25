import React from 'react'
import { Box, Link, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Map = () => {
  return (
    <Flex flexDir='column' gap={3} width='full'>
      <Box
        width='full'
        height='400px'
        borderRadius='xl'
        overflow='hidden'
        boxShadow='md'
        borderWidth='1px'
        borderColor='smoke.300'
      >
        <iframe
          src='https://maps.google.com/maps?q=Puerta%205,%20Universidad%20Nacional%20de%20Ingenieria,%20Rimac,%20Lima&t=&z=16&ie=UTF8&iwloc=&output=embed'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </Box>
      <Link
        href='https://maps.app.goo.gl/2Q8Y2f7jbNoh3gtS6'
        isExternal
        color='brand.100'
        fontWeight='semibold'
        fontSize='sm'
        display='flex'
        alignItems='center'
        gap={1}
        width='fit-content'
        _hover={{ textDecoration: 'underline', color: 'brand.200' }}
      >
        Ver ubicación en Google Maps <ExternalLinkIcon mx='2px' />
      </Link>
    </Flex>
  )
}

export default Map
