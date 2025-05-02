import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Helpdesk AI">
    <Container>
      <Title>
        Helpdesk AI <Badge>Sept 2023 - Nov 2023</Badge>
      </Title>
      <P>
        An AI model for HelpDesk ticketing, leveraging HelpDesk APIs and a locally trained AI to improve IT support efficiency and response times.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Features</Meta>
          <span>Automated ticketing, IT support enhancement, Response time reduction</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Mistral, Llama2, OpenAI, JSON, API Development</span>
        </ListItem>
        <ListItem>
          <Meta>Techniques</Meta>
          <span>Scraping, Artificial Intelligence, API Integration</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 