import React from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

const TodoForm = (props: any) => {
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
            />
            <Button 
                leftIcon={<SmallAddIcon />} 
                colorScheme="blue" 
                variant="solid"
                pr='6'
                onClick={props.handleAdd}
            >
                Adcionar
            </Button>
        </Stack>
    )
}

export default TodoForm;