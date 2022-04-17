import React from 'react';
import { Container } from '@chakra-ui/react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <Container maxW="container.lg">
            <PageHeader name='Cadastar' small='Tasks'/>
            <TodoForm />
            <TodoList />
        </Container>
    )
}

export default Todo;