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
