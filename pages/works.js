import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Website from '../public/images/works/website.jpg'
import ai from '../public/images/works/ai.jpg'
import migrai from '../public/images/works/migrai.png'
import recall from '../public/images/works/recall.png'
import ingen from '../public/images/works/ingen.png'
import tricots from '../public/images/works/tricots.png'
import tireswift from '../public/images/works/tireswift.png'
import rlama from '../public/images/works/rlama.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Box height="300px">
            <WorkGridItem id="rlama" title="RLAMA" thumbnail={rlama}>
              Powerful document question-answering tool that connects to local Ollama models for RAG systems
            </WorkGridItem>
          </Box>
        </Section>
        
        <Section>
          <Box height="300px">
            <WorkGridItem id="ingen" title="Ingen-IA" thumbnail={ingen}>
              AI-powered assistant that enhances autonomous learning by explaining concepts clearly with dynamic vocal features
            </WorkGridItem>
          </Box>
        </Section>

        <Section>
          <Box height="300px">
            <WorkGridItem id="remind" title="reMind" thumbnail={recall}>
              AI that tracks and summarizes digital activities locally and privately, storing data in a vector database
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box height="300px">
            <WorkGridItem id="helpdesk" thumbnail={ai} title="Helpdesk AI">
              AI model for HelpDesk ticketing, leveraging APIs and locally trained AI to improve IT support efficiency
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box height="300px">
            <WorkGridItem id="migrai" thumbnail={migrai} title="MigrAI">
              Software providing tools to assist individuals with the Canadian immigration process
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box height="300px">
            <WorkGridItem id="tricots" thumbnail={tricots} title="Tricots Melbouci">
              Website for family textile company featuring a dynamic and visually appealing landing page
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box height="300px">
            <WorkGridItem id="tireswift" thumbnail={tireswift} title="TireSwift">
              Web application with authentication and a Python API with a reservation algorithm to optimize schedules
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box height="300px">
            <WorkGridItem id="Portfolio" title="Portfolio" thumbnail={Website}>
              My Portfolio Website, with modern technologies like Next.js, React, and Three.js
            </WorkGridItem>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
