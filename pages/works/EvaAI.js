import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EvaAI">
    <Container>
      <Title>
        FarahAI <Badge>2023</Badge>
      </Title>
      <P>
      EvaAI: Your Mortgage Virtual AI Agent - Unlocking Mortgage Knowledge and Answers at Your Fingertips!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>In production.</Meta>
          <Link>
          Version 1.0.0 <ExternalLinkIcon mx="2px" />
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
