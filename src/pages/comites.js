import { Layout } from '@/components/Layout'
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import CardTeam from '@/components/CardTeam'
import comites from '@/data/comites.json'

export default function Comites({ cientifico, organizador }) {
  return (
    <Layout>
      <Flex flexDir='column' gap={6} mb={8} py={4}>
        <Heading as='h2' size='lg' color='brand.100' textAlign='center'>
          Comités CIMM-UNI 2026
        </Heading>

        <Tabs isFitted variant='enclosed' colorScheme='red' width='full'>
          <TabList mb='1em'>
            <Tab fontWeight='bold'>Comité Científico</Tab>
            <Tab fontWeight='bold'>Comité Organizador</Tab>
          </TabList>
          <TabPanels>
            {/* Comité Científico */}
            <TabPanel>
              <Grid
                templateColumns={[
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)',
                  'repeat(4, 1fr)'
                ]}
                gap={4}
              >
                {cientifico.map((item, index) => (
                  <GridItem key={index}>
                    <CardTeam team={item} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>

            {/* Comité Organizador */}
            <TabPanel>
              <Grid
                templateColumns={[
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)',
                  'repeat(4, 1fr)'
                ]}
                gap={4}
              >
                {organizador.map((item, index) => (
                  <GridItem key={index}>
                    <CardTeam team={item} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      cientifico: comites.scientist,
      organizador: comites.organizer
    }
  }
}
