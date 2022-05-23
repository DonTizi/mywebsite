import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import Footer from '../footer'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb = {8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="emorayane.png" />
                <title>Melbouci Elyes Rayane Homepage</title>
    <meta
      name="description"
      content="My Personnal Website made with Three JS React JS and more."
    />

    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Melbouci Elyes Rayane"
    />
    <meta
      property="og:description"
      content="IT Support, DEV3, Developper and more..."
    />
    <meta
      property="og:image"
      content="../layouts/website.png"
    />
    <meta property="og:url" content="www.melboucierayane.com/" />
    <meta
      property="og:site_name"
      content="Melbouci Elyes Rayane - IT&DEV"
    />
            </Head>
            <Navbar path ={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                <VoxelDog/>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
