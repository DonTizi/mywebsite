import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tricots Melbouci">
    <Container>
      <Title>
        Tricots Melbouci <Badge>Jan 2024 - Mar 2024</Badge>
      </Title>
      <P>
        Website for my family textile company in Montreal, featuring a dynamic and visually appealing landing page. Built with modern technologies like Next.js, React, TypeScript, Tailwind CSS, and Three.js.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Features</Meta>
          <span>Dynamic landing page, Visual design, Company showcase</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, React.js, JavaScript, HTML, Tailwind CSS, Three.js</span>
        </ListItem>
        <ListItem>
          <Meta>Industry</Meta>
          <span>Textile, Family Business, E-commerce</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 