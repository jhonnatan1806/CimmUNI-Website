import { Layout } from '@/components/Layout'
import { Text, Link } from '@chakra-ui/react'
import Map from '@/components/Map'

export default function Contacto() {
  return (
    <>
      <Layout sponsor>
        <Text mb={4}>
          Para contactarnos por favor enviar un correo a{' '}
          <Link color='brand.100' fontWeight='bold' href='mailto:cimm.uni.2026@gmail.com'>
            cimm.uni.2026@gmail.com
          </Link>{' '}
          con el siguiente asunto: cimm-uni-2026.
        </Text>
        <Text mb={4} fontSize='md'>
          <strong>Referencia:</strong> Estación Honorio Delgado del Metropolitano.
        </Text>
        <Map />
      </Layout>
    </>
  )
}
