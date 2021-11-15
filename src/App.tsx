import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Menu from './template/Menu';
import Routes from './Routes';

function App() {
  return (
    <ChakraProvider>
      <Menu />
      <Routes />
    </ChakraProvider>
  );
}

export default App;
