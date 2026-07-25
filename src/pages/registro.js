import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { Box, Card, CardBody, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'

export default function Registro() {
  const router = useRouter()
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    if (router.isReady) {
      const { tab } = router.query
      if (tab === 'ponencias') {
        setTabIndex(1)
      } else {
        setTabIndex(0)
      }
    }
  }, [router.isReady, router.query])

  const handleTabChange = (index) => {
    setTabIndex(index)
    router.push(
      `/registro?tab=${index === 1 ? 'ponencias' : 'participantes'}`,
      undefined,
      { shallow: true }
    )
  }

  return (
    <>
      <Layout sponsor>
        <Box display='flex' flexDir='column' alignItems='center' gap={6} py={4}>
          <Heading as='h2' size='lg' color='brand.100'>
            Registro CIMM-UNI 2026
          </Heading>

          <Tabs
            index={tabIndex}
            onChange={handleTabChange}
            isFitted
            variant='enclosed'
            colorScheme='red'
            width='full'
            maxW='3xl'
          >
            <TabList mb='1em'>
              <Tab fontWeight='bold'>Inscripción de Participantes</Tab>
              <Tab fontWeight='bold'>Inscripción de Ponencias</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card>
                  <CardBody display='flex' justifyContent='center'>
                    <iframe
                      src='https://docs.google.com/forms/d/e/1FAIpQLScJhCo76Nq813UZAVxLecxZxch84Rj4o2iDiLLWuYnQlJ-6Lw/viewform?embedded=true'
                      width='640'
                      height='1240'
                      style={{ border: 'none' }}
                    >
                      Cargando…
                    </iframe>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <Card>
                  <CardBody display='flex' justifyContent='center'>
                    <iframe
                      src='https://docs.google.com/forms/d/e/1FAIpQLScQcZ-_YlA0KLyQPEcl3tGpFjPCKP1KZ6Su6sMp5WV81AyBhw/viewform?embedded=true'
                      width='640'
                      height='1240'
                      style={{ border: 'none' }}
                    >
                      Cargando…
                    </iframe>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Layout>
    </>
  )
}
