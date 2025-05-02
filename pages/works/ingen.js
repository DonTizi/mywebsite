import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ingen-IA">
    <Container>
      <Title>
        Ingen-IA <Badge>Dec 2024</Badge>
      </Title>
      <P>
        An AI-powered assistant that enhanced autonomous learning by explaining concepts clearly and adding a dynamic vocal dimension. The project expanded to create 124 tailored AI agents for different courses by collecting public syllabi, structuring data, and designing specialized agents.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Features</Meta>
          <span>Authentication, Database Management, AI Development, Web Scraping, Payment Integration</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OpenAI, ElevenLabs, Supabase, Selenium, BeautifulSoup, Stripe</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Ethical AI development, data privacy and confidentiality</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 