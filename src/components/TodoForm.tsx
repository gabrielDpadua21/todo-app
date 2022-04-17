import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Input, Stack } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { DeleteIcon } from '@chakra-ui/icons';

import { add, changeName, search, clear } from '../actions/todoActions';

class TodoForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentDidMount() {
        this.props.search()
    }
    
    keyHandler(event: any) {
        const { add, search, name, clear } = this.props;
        if(event.key === 'Enter') event.shiftKey ? search(name) : add(name);
        if(event.key === 'Espace') clear();
    }

    render() {
        const { add, search, name, clear, changeName } = this.props;
        return (
            <Stack
            as='form'
            pt={5}
            direction='row'
            spacing={2}
        >
            <Input 
                placeholder='Adcione uma task' 
                value={name}
                onChange={event => changeName(event)}
                onKeyUp={this.keyHandler}
            />
            <Button 
                leftIcon={<SmallAddIcon />} 
                colorScheme="blue" 
                variant="solid"
                pl='6'
                onClick={() => add(name)}
            >
            </Button>
            <Button 
                leftIcon={<SearchIcon />}
                colorScheme='green'
                variant='solid'
                pl='6'
                onClick={() => search(name)}
            >
            </Button>
            <Button 
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                variant='solid'
                pl='6'
                onClick={() => clear()}
            >
            </Button>
        </Stack>
        )
    }
}

const mapStateToProps = (state: any) => ({ name: state.todo.name })

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ add, changeName, search, clear }, dispatch);

export default connect<{}, {}, any>(mapStateToProps, mapDispatchToProps)(TodoForm);