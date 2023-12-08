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
            Hello, I'm an IT Support based in Montreal!
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant='page-title'>
                    Melbouci E. Rayane
                </Heading>
            <p>IT Support( IT / Developper / Designer)</p>
            </Box>
           <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
               <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/rayane.jpg" alt="Profile Image"/>
               </Box> 
        </Box>
        <Section delay={0.1}>
            <Heading as ="h3" variant="section-title">
               Who am I?
            </Heading>
            <Paragraph>
Rayane is an IT Support Specialist located in Montreal, possessing a fervent interest in information technology and emerging advancements. His innate aptitude for technology enables him to continuously progress, learn, and explore various aspects of the field. 
               His areas of expertise include programming languages, cybersecurity, and network infrastructure.
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
                <BioYear>2021</BioYear>
                Completed the D.E.C in Computer network management
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Worked at CISSS Montérégie-Est (It Technician level II)
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Work at CN Investment Division as an It Support
            </BioSection>
            <BioSection>
                <BioYear>2022 - In progress..</BioYear>
                Bachelor of Software engineering in ETS Canada
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
                    <Link href='https://twitter.com/E_melbou' target="_blank">
                        <Button variant="ghost" colorSchene="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>@DonTizi </Button>
                    </Link>
                </ListItem>


            </List>
        </Section>
        
    </Container>)
}
export default Page
