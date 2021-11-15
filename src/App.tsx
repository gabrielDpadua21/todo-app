import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Navbar from './template/Menu';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Container pt={14} mxW='md'>
          <Routes />
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
