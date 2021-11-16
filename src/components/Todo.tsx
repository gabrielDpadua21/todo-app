import React, { Component } from 'react';
import { Container } from '@chakra-ui/react';
import PageHeader from '../template/PageHeader';

export default class Todo extends Component {
    render() {
        return (
            <Container>
                <PageHeader name='Tarefas' small='Cadastro'/>
            </Container>
        )
    }
}