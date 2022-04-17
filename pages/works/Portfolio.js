import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Portfolio">
    <Container>
      <Title>
        My Website Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        My Portfolio - Curriculum Vitae Website, to See every projects and work I'll do!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Portfolio</Meta>
          <Link href="https://www.melboucirayane.com/">
          https://www.melboucirayane.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Three JS, React Native</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'