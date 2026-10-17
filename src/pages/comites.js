import { Layout } from '@/components/Layout'
import {
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import comites from '@/data/comites.json'

const MemberList = ({ members }) => {
  return (
    <List sx={{ columnCount: [1, 2], columnGap: 8 }}>
      {members.map((member, index) => (
        <ListItem
          key={index}
          display='flex'
          alignItems='center'
          gap={4}
          py={3}
          px={2}
          borderBottomWidth='1px'
          borderColor='smoke.200'
          sx={{ breakInside: 'avoid' }}
        >
          <Text
            as='span'
            minW={6}
            fontSize='sm'
            fontWeight='bold'
            color='brand.100'
            textAlign='right'
          >
            {index + 1}.
          </Text>
          <Text as='span' fontSize={['md', 'lg']}>
            {member.name}
          </Text>
        </ListItem>
      ))}
    </List>
  )
}

export default function Comites({ cientifico, organizador }) {
  return (
    <Layout>
      <Flex flexDir='column' gap={6} mb={8} py={4}>
        <Heading as='h2' size='lg' color='brand.100' textAlign='center'>
          Comités CIMM-UNI 2026
        </Heading>

        <Tabs
          isFitted
          variant='enclosed'
          colorScheme='red'
          width='full'
          maxW='4xl'
          mx='auto'
        >
          <TabList mb='1em'>
            <Tab fontWeight='bold'>Comité Científico</Tab>
            <Tab fontWeight='bold'>Comité Organizador</Tab>
          </TabList>
          <TabPanels>
            {/* Comité Científico */}
            <TabPanel>
              <MemberList members={cientifico} />
            </TabPanel>

            {/* Comité Organizador */}
            <TabPanel>
              <MemberList members={organizador} />
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
