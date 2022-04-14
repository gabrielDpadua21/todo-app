import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { search } from '../actions/todoActions';

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
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClean = this.handleClean.bind(this);
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
        this.refresh(this.state.name);
    }

    async handleMarkDone(id: number) {
        const result = await axios.put(`${BASE_URL}/tasks/${id}`, {status: true})
        this.refresh(this.state.name);
    }

    async handleMarkUndone(id: number) {
        const result = await axios.put(`${BASE_URL}/tasks/${id}`, {status: false})
        this.refresh(this.state.name);
    }

    handleSearch() {
        this.refresh(this.state.name);
    }

    handleClean() {
        this.refresh();
    }

    async refresh(_name?: string) {
        let url = `${BASE_URL}/tasks`;
        if(_name) url = `${url}/search/${_name}`;
        const { data } = await axios.get(url);
        this.setState({...this.state, name: _name ?? '', list: data});
    }

    render() {
        return (
            <Container maxW="container.lg">
                <PageHeader name='Cadastar' small='Tasks'/>
                <TodoForm
                    search={search} 
                    name={this.state.name}  
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClean={this.handleClean}
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