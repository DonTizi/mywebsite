import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Token = () => (
  <Layout title="ERM's Token">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} textAlign="center">
        ERM's Tokens
      </Heading>

      <SimpleGrid >
        <Section>
        <div>
        <iframe
            src="https://gateway.ipfscdn.io/ipfs/QmfJu3spsSJot6givCK2VjwEgVHymc5RCXHqfG1W5WZyFX/token-drop.html?contract=0x4d9EdfCBBECD8664174e0C684B7eb180769cCa06&chainId=4"
            width="510px"
            height="420px"
            float="left">

            </iframe>
        </div>
        </Section>


      </SimpleGrid>



    </Container>
  </Layout>
)

export default Token
export { getServerSideProps } from '../components/chakra'
