import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const BASE_URL = 'http://localhost:3001'

export default class Todo extends Component<{}, {name: string, list: any}> {
    constructor(props: any) {
        super(props);
        this.state = { name: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkDone = this.handleMarkDone.bind(this);
        this.handleMarkUndone = this.handleMarkUndone.bind(this);
        this.refresh();
    }

   async handleAdd() {
        const name = this.state.name;
        try {
            const result = await axios.post(`${BASE_URL}/tasks`, {name: name})
            if(result) this.refresh();
        } catch (err) {
            console.log(err);
        }
    }

    handleChange(event: any) {
        this.setState({...this.state, name: event.target.value});
    }

    async handleRemove(id: number) {
        const result = await axios.delete(`${BASE_URL}/tasks/${id}`);
        this.refresh();
    }

    async handleMarkDone(id: number) {
        const result = await axios.put(`${BASE_URL}/tasks/${id}`, {status: true})
        this.refresh();
    }

    async handleMarkUndone(id: number) {
        const result = await axios.put(`${BASE_URL}/tasks/${id}`, {status: false})
        this.refresh();
    }

    async refresh() {
        const { data } = await axios.get(`${BASE_URL}/tasks`);
        this.setState({...this.state, name: '', list: data});
    }

    render() {
        return (
            <Container maxW="container.lg">
                <PageHeader name='Cadastro' small='Tasks'/>
                <TodoForm 
                    name={this.state.name}  
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkUndone={this.handleMarkUndone}
                    handleMarkDone={this.handleMarkDone}
                />
            </Container>
        )
    }
}