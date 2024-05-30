import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import { ChakraProvider, Box } from '@chakra-ui/react';
import ThreeScene from './components/ThreeScene';
import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/About';
import Works from './components/Works';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box position="relative" minHeight="100vh">
          <Navbar />
          <ThreeScene />
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/works" element={<Works />}></Route>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;