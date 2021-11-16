import React from 'react';
import { 
    Table, 
    TableCaption, 
    Thead, 
    Tr, 
    Th, 
    Tbody, 
    Td, 
    Tfoot,
    Box,
    IconButton,
    Text
} from '@chakra-ui/react';
import { CloseIcon, CheckIcon, RepeatIcon } from '@chakra-ui/icons';


const TodoList = (props: any) => {

    const renderText = (todo: any) => {
        if(todo.status) return (<Text as='del'>{todo.name}</Text>)
        return (<Text>{todo.name}</Text>)
    }

    const renderRows = () => {
        const list = props.list || [];

        return list.map((todo: any) => 
            (
                <Tr key={todo.id}>
                    <Td>
                        {renderText(todo)}
                    </Td>
                    <Td textAlign="right">
                        <IconButton
                          aria-label='task-done'
                          icon={<CheckIcon />}
                          colorScheme='green'
                          size='lg'
                          mr={2}
                          onClick={() => props.handleMarkDone(todo.id)}
                          hidden={todo.status}
                        />
                        <IconButton
                          aria-label='task-undone'
                          icon={<RepeatIcon />}
                          colorScheme='yellow'
                          size='lg'
                          mr={2}
                          onClick={() => props.handleMarkUndone(todo.id)}
                          hidden={!todo.status}
                        />
                        <IconButton 
                            aria-label='delete-task' 
                            icon={<CloseIcon />} 
                            colorScheme='red'
                            size='lg'
                            onClick={() => props.handleRemove(todo.id)}
                        />
                    </Td>
                </Tr>
            )
        );
    }

    return (
        <Box
         pt={5}
        >
            <Table 
                variant="striped"
                colorScheme='gray'
            >
                <TableCaption>Tasks List</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Task</Th>
                        <Th textAlign="right">Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderRows()}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Tasks</Th>
                        <Th textAlign="right">Ações</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Box>
    )
}

export default TodoList;