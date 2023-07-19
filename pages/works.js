import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Website from '../public/images/works/website.jpg'
import NFT from '../public/images/works/ai.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Portfolio" title="Portfolio" thumbnail={Website}>
            My Portfolio Website, with news technologies and programing langages like Three.JS!
          </WorkGridItem>
        </Section>


       <Section delay={0.1}>
          <WorkGridItem id="NFT" thumbnail={NFT} title="My AI assistant.">
          My esteemed Virtual AI Assistant, adept at answering inquiries about my personality, professional career, and education.
          </WorkGridItem>
        </Section>

      </SimpleGrid>



    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
