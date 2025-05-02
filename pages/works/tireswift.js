import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TireSwift">
    <Container>
      <Title>
        TireSwift <Badge>Jan 2024</Badge>
      </Title>
      <P>
        A web application utilizing ClerkJS for authentication and a Python API with a reservation algorithm to optimize schedules. The application allows administrators to log in and access tailored schedules.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Features</Meta>
          <span>Authentication, Reservation system, Schedule optimization</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Flask, Tailwind CSS, Next.js, React.js, TypeScript, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Security</Meta>
          <span>Multi-Factor Authentication, Admin controls</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 