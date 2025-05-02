import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="reMind">
    <Container>
      <Title>
        reMind <Badge>Dec 2023 - Present</Badge>
      </Title>
      <P>
        An AI that tracks and summarizes digital activities locally and privately, storing data in a vector database. Users can ask questions like "Summarize my day on February 24th" or "Where did I find the solution to this error?" with responses powered by embeddings and advanced indexing functions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Features</Meta>
          <span>Activity tracking, Data privacy, Summarization, Vector search</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, SQL, HuggingFace, Ollama, ChromaDB, LangChain, PyQt, Selenium, Beautiful Soup, SQLite, Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Techniques</Meta>
          <span>Finetuning, Embedding, API Development, Automation</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 