import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RecallAI">
    <Container>
      <Title>
        Recall <Badge>2024</Badge>
      </Title>
      <P>
      Recall is an artificial memory where you can recall all your activity from your laptop. You can ask him whetever question about when did you searched something, or what did you do at this time. It will act like your personnal assistant with an artificial memory.      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>In production.</Meta>
          <Link href="https://recall-ai-ten.vercel.app/">
          https://recall-ai-ten.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, SQL, ML/AI, OpenAI, Tailwind.</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
