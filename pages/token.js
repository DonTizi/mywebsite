import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {  BioToken } from '../components/bio'


const Token = () => (
  <Layout title="ERM's Token">
    <Container>
    <Box flexGrow={4}>
                <Heading as="h2" variant='page-title'>
                                ERM's Token
                </Heading>
            <p>My own Crypto token. It will be used wisely for my future projects related to Web3...</p>
            </Box>

      <SimpleGrid >
        <Section>

            <Box align="center" my={4}>
            <BioToken>
              <iframe
                src="https://gateway.ipfscdn.io/ipfs/QmfJu3spsSJot6givCK2VjwEgVHymc5RCXHqfG1W5WZyFX/token-drop.html?contract=0x30B7Fb8EeC511e7EA763A6eD3c6eD58795cB05E2&chainId=137"
                width="475"
                height="470"></iframe>
            </BioToken>
        </Box>

        </Section>


      </SimpleGrid>



    </Container>
  </Layout>
)

export default Token
export { getServerSideProps } from '../components/chakra'
