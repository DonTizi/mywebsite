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
            <BioToken>            <iframe
            src="https://gateway.ipfscdn.io/ipfs/QmfJu3spsSJot6givCK2VjwEgVHymc5RCXHqfG1W5WZyFX/token-drop.html?contract=0x4d9EdfCBBECD8664174e0C684B7eb180769cCa06&chainId=4"
            width="475px"
            height="470px">
            </iframe>
            </BioToken>
        </Box>

        </Section>


      </SimpleGrid>



    </Container>
  </Layout>
)

export default Token
export { getServerSideProps } from '../components/chakra'
