import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Todo from './components/Todo';
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
      <Todo />
      <About />
    </ChakraProvider>
  );
}

export default App;
