import { Box, Text, Heading } from '@chakra-ui/react';

export default function Home() {
    return (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="10" css={{ animation: 'fadeIn 2s ease-in-out forwards' }}>
            <Heading mb={4} color="teal.500" >Hello</Heading>
            <Text fontSize="lg" color="teal.100">
                this is Aditya Kantipudi, Building things for fun
            </Text>
        </Box>
    );
}