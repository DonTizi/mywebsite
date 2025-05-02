import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RLAMA">
    <Container>
      <Title>
        RLAMA <Badge>2024</Badge>
      </Title>
      <P>
        A powerful document question-answering tool that connects to local Ollama models. RLAMA allows users to create, manage, and interact with Retrieval-Augmented Generation (RAG) systems for documents, providing a complete solution for knowledge management with 100% local processing and privacy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rlama.dev/">
            https://rlama.dev/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Key Features</Meta>
          <span>RAG Systems, Multiple Document Formats, Offline Processing, AI Agents & Crews</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ollama, Vector Databases, Python, Local LLMs, Document Processing</span>
        </ListItem>
        <ListItem>
          <Meta>Capabilities</Meta>
          <span>Web Crawling, Directory Watching, Hugging Face Integration, HTTP API Server</span>
        </ListItem>
      </List>
      

      
      <P>
        RLAMA offers a complete solution for document-based question answering with powerful features like intelligent chunking, interactive sessions, and automated document watching. It supports multiple file formats including PDFs, Markdown, and various code files, with all processing done locally for maximum privacy.
      </P>
      
      <P>
        The system can also create specialized AI agents for specific tasks (researcher, writer, coder) or collaborative crews to solve complex problems, all while maintaining a commitment to local processing with no data sent to external servers.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 