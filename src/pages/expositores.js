import { Layout } from '@/components/Layout'
import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

export default function Expositores() {
  return (
    <>
      <Layout>
        <VStack spacing={8} py={12} px={4} align='center' justify='center' minH='55vh'>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            width='full'
            maxW='2xl'
            bg='white'
            borderRadius='2xl'
            boxShadow='xl'
            overflow='hidden'
            borderWidth='1px'
            borderColor='smoke.200'
            position='relative'
          >
            {/* Top colored gradient highlight bar */}
            <Box
              height='6px'
              bgGradient='linear(to-r, brand.100, brand.200)'
              width='full'
            />

            <VStack spacing={6} p={{ base: 6, md: 10 }} align='center' textAlign='center'>
              {/* Animated Calendar/Megaphone Icon */}
              <MotionBox
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                p={4}
                bg='brand.300'
                color='brand.100'
                borderRadius='full'
                display='flex'
                alignItems='center'
                justifyContent='center'
                boxShadow='md'
              >
                <CalendarIcon w={10} h={10} />
              </MotionBox>

              {/* Content block */}
              <MotionVStack
                spacing={4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Box
                  bg='brand.300'
                  color='brand.100'
                  px={4}
                  py={1}
                  borderRadius='full'
                  fontSize='xs'
                  fontWeight='bold'
                  letterSpacing='wider'
                  textTransform='uppercase'
                >
                  Edición 2026
                </Box>

                <Heading
                  as='h2'
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight='extrabold'
                  lineHeight='shorter'
                  color='brand.100'
                >
                  Próximamente se estarán anunciando los expositores
                </Heading>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  maxW='lg'
                  lineHeight='tall'
                >
                  Estamos preparando un programa de primer nivel con la participación de destacados plenaristas y conferencistas nacionales e internacionales. ¡Mantente al tanto de nuestras actualizaciones!
                </Text>
              </MotionVStack>

              {/* Action buttons */}
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                width='full'
                display='flex'
                flexDir={{ base: 'column', sm: 'row' }}
                gap={4}
                justifyContent='center'
                pt={4}
              >
                <Link
                  href='/registro?tab=participantes'
                  bg='brand.100'
                  color='white'
                  fontSize='md'
                  fontWeight='bold'
                  px={8}
                  py={3}
                  borderRadius='md'
                  textAlign='center'
                  _hover={{
                    bg: 'brand.200',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                  }}
                  transition='all 0.2s'
                >
                  Inscripción Participantes
                </Link>
                <Link
                  href='/registro?tab=ponencias'
                  bg='brand.100'
                  color='white'
                  fontSize='md'
                  fontWeight='bold'
                  px={8}
                  py={3}
                  borderRadius='md'
                  textAlign='center'
                  _hover={{
                    bg: 'brand.200',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                  }}
                  transition='all 0.2s'
                >
                  Inscripción Ponencias
                </Link>
                <Link
                  href='/contacto'
                  borderWidth='1px'
                  borderColor='brand.100'
                  color='brand.100'
                  fontSize='md'
                  fontWeight='bold'
                  px={8}
                  py={3}
                  borderRadius='md'
                  textAlign='center'
                  _hover={{
                    bg: 'brand.300',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)'
                  }}
                  transition='all 0.2s'
                >
                  Contacto / Consultas
                </Link>
              </MotionBox>
            </VStack>
          </MotionBox>
        </VStack>
      </Layout>
    </>
  )
}
