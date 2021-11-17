import React from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoForm = (props: any) => {

    const keyHandler = (event: any) => {
        if(event.key === 'Enter') event.shiftKey ? props.hendleSearch() : props.hendleAdd();
        if(event.key === 'Espace') props.handleClean();
    }

    return (
        <Stack
            as='form'
            pt={5}
            direction='row'
            spacing={2}
        >
            <Input 
                placeholder='Adcione uma task' 
                value={props.name}
                onChange={props.handleChange}
                onKeyUp={keyHandler}
            />
            <Button 
                leftIcon={<SmallAddIcon />} 
                colorScheme="blue" 
                variant="solid"
                pl='6'
                onClick={props.handleAdd}
            >
            </Button>
            <Button 
                leftIcon={<SearchIcon />}
                colorScheme='green'
                variant='solid'
                pl='6'
                onClick={props.handleSearch}
            >
            </Button>
            <Button 
                leftIcon={<DeleteIcon />}
                colorScheme='red'
                variant='solid'
                pl='6'
                onClick={props.hendleClean}
            >
            </Button>
        </Stack>
    )
}

export default TodoForm;