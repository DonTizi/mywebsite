import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, ListIcon, List, ListItem, Icon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import {GridItem} from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.jpg'
import Footer from '../components/footer.js'
import thumbcraft from '../public/images/links/craftzdog.jpg'

const Page = () => {
    return (<Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I'm a AI Developer & Software Engineer based in Montreal!
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant='page-title'>
                    Melbouci E. Rayane
                </Heading>
            <p>AI Developer (Data Engineer / AI Developer / BI Specialist)</p>
            </Box>
           <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
               <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                boxSize="100px"
                display="inline-block" 
                borderRadius="full" 
                src="/images/rayane.jpg" 
                alt="Profile Image"
                objectFit="cover"
               />
               </Box> 
        </Box>
        <Section delay={0.1}>
            <Heading as ="h3" variant="section-title">
               Who am I?
            </Heading>
            <Paragraph>
Rayane is a Business Intelligence Developer at CN Investment Division with expertise in AI solutions and data infrastructure. He possesses a fervent interest in artificial intelligence, data engineering, and emerging technologies. His technical skills include Python, SQL, PyTorch, HuggingFace, and working with cloud platforms like AWS, Azure, and Snowflake. He is currently pursuing a Bachelor's degree in Software Engineering at École De Technologie Supérieur.
        </Paragraph>

        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                    My portfolio
                </Button>
            </NextLink>

        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2000</BioYear>
                Born in Alger (الجزائر), Algeria.
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Completed the D.E.C in Network And Security Architecture from Maisonneuve College
            </BioSection>
            <BioSection>
                <BioYear>2021 - 2022</BioYear>
                Worked at CISSS Montérégie-Est as IT Support Specialist
            </BioSection>
            <BioSection>
                <BioYear>2022 - Present</BioYear>
                Work at CN Investment Division as a Business Intelligence Developer
            </BioSection>
            <BioSection>
                <BioYear>Expected 2027</BioYear>
                Bachelor of Software Engineering at École De Technologie Supérieur (ETS)
            </BioSection>

        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Skills
            </Heading>
            <BioSection>
                <BioYear>AI/ML</BioYear>
                PyTorch, HuggingFace, Numpy, Pandas, Scikit-Learn
            </BioSection>
            <BioSection>
                <BioYear>Cloud</BioYear>
                Snowflake, AWS, Azure
            </BioSection>
            <BioSection>
                <BioYear>Programming</BioYear>
                Python, SQL, Java, TypeScript, React, HTML & CSS
            </BioSection>
            <BioSection>
                <BioYear>Math</BioYear>
                Linear Algebra, Vector Calculus, Probability and Statistics
            </BioSection>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Art, Music,
            Mangas,
            Photography
          , Football, Movies
        </Paragraph>
      </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                My social networks
            </Heading> 
            <List>
                <ListItem>
                    <Link href='https://github.com/DonTizi' target="_blank">
                        <Button variant="ghost" colorSchene="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@DonTizi </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://twitter.com/LeDonTizi' target="_blank">
                        <Button variant="ghost" colorSchene="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>@DonTizi </Button>
                    </Link>
                </ListItem>


            </List>
        </Section>
        
    </Container>)
}
export default Page
