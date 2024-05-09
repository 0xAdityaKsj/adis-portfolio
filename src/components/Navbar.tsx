import { Flex, Button, Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <Flex as="nav" justify="center" pt="25" position="absolute" left={0} right={0} >
            <Box bg="rgba(255, 255, 255, 0.1)" p="2" borderRadius="lg" boxShadow="md">
                <NavLink to="/"><Button color="white" variant="ghost" border="none" _hover={{ bg: "transparent", textDecoration: 'underline' }} _focus={{ outline: 'none' }}>Home</Button></NavLink>
                <NavLink to="/about"><Button color="white" variant="ghost" border="none" _hover={{ bg: "transparent", textDecoration: 'underline' }} _focus={{ outline: 'none' }}>About</Button></NavLink>
                <NavLink to="/works"><Button color="white" variant="ghost" border="none" _hover={{ bg: "transparent", textDecoration: 'underline' }} _focus={{ outline: 'none' }}>Works</Button></NavLink>
            </Box>
        </Flex >
    )
}