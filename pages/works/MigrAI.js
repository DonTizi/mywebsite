import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MigrAI">
    <Container>
      <Title>
        MigrAI <Badge>2023</Badge>
      </Title>
      <P>
      MigrAI: Your Canadian Immigration solver.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>In production.</Meta>
          <Link href="https://www.imigrai.ca/">>
          Version 1.0.0 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Typescript, React Native, BotPress, OpenAI, Tailwind.</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
