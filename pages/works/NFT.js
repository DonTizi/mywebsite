import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NFT">
    <Container>
      <Title>
        My NFT Project <Badge>2022</Badge>
      </Title>
      <P>
            My NFT project, made with Open-sources engines. Hash Lips Engine to make efficient smarts contracts
            with Solidity and JS, and BMN Engine to create my 3D collection in Blenders.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>In coming...</Meta>
          <Link>
          Will be public in the nexts weeks... <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Three JS, React Native, Solidity, Blenders, EtherScan, Ganache.</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
