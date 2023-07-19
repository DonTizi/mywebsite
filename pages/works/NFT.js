import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="C-01">
    <Container>
      <Title>
        C-01 <Badge>2023</Badge>
      </Title>
      <P>
      My esteemed Virtual AI Assistant, adept at answering inquiries about my personality, professional career, and education.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>In coming...</Meta>
          <Link>
          version 0.3 of C-01 is on production. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Three JS, React Native, BotPress, META.</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
