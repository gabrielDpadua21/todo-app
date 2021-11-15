import React, { Component } from 'react';
import { Container, Heading } from '@chakra-ui/react';

export default class Todo extends Component {
    render() {
        return (
            <Container>
                <Heading as='h1'>
                    Todo
                </Heading>
            </Container>
        )
    }
}