import { Box, Text, Link, VStack, HStack } from '@chakra-ui/react';

function About() {
    return (
        <Box className="about" position="absolute" top="340" left="500" zIndex="10" transform="translate(-50%, -50%)" color="#FFFFFF" css={{ animation: 'fadeIn 2s ease-in-out forwards' }}

            fontStyle=" sans-serif">
            <VStack spacing={3} align="left">
                <Text as="h1">About Adi K</Text>
                <Text>
                    I appreciate beautiful designs, be it a webpage, architecture, or spacecraft..
                    I like anything that is beautiful, and I believe we should build beautiful things.
                    I'm a frontend dev but can work with almost anything with enough time to prepare (because I'm Batman... just kidding lol).
                    I would like to learn more about AI systems, robotics, and low-level engineering.
                </Text>

                <Text as="h1" size="lg">Now</Text>

                <Text>learning bout more web stuff, design ⚜️ and electronics</Text>
                <Text>doing -
                    <Link href="https://missing.csail.mit.edu/" isExternal> <span>./missing_sem</span></Link></Text>
                <Text>Learning Japanese | Hiragana</Text>

                <Text as="h1" size="lg">Contact</Text>
                <HStack spacing={3}>
                    <Link href="mailto:aditya.kantipudi@protonmail.com" isExternal>Email</Link>
                    <Link href="https://twitter.com/0xadi_k" isExternal>Twitter</Link>
                </HStack>
            </VStack>
        </Box>
    );
}

export default About;