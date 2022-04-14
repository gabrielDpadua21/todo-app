import React, { Component, Props } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Input, Stack } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { DeleteIcon } from '@chakra-ui/icons';

import { changeName, search } from '../actions/todoActions';

interface IProps extends Props<any> {
    search?: any;
    handleSearch: any,
    handleAdd: any,
    handleClean: any,
    name: any,
    handleChange: any,
}
class TodoForm extends Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillUnmount() {
        this.props.search()
    }
    
    keyHandler(event: any) {
        if(event.key === 'Enter') event.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        if(event.key === 'Espace') this.props.handleClean();
    }

    render() {
        return (
            <Stack
            as='form'
            pt={5}
            direction='row'
            spacing={2}
        >
            <Input 
                placeholder='Adcione uma task' 
                value={this.props.name}
                onChange={this.props.handleChange}
                onKeyUp={this.keyHandler}
            />
            <Button 
                leftIcon={<SmallAddIcon />} 
                colorScheme="blue" 
                variant="solid"
                pl='6'
                onClick={this.props.handleAdd}
            >
            </Button>
            <Button 
                leftIcon={<SearchIcon />}
                colorScheme='green'
                variant='solid'
                pl='6'
                onClick={this.props.handleSearch}
            >
            </Button>
            <Button 
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                variant='solid'
                pl='6'
                onClick={this.props.handleClean}
            >
            </Button>
        </Stack>
        )
    }
}

const mapStateToProps = (state: any) => ({ name: state.todo.name })

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ changeName, search }, dispatch);

export default connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(TodoForm);