import React from 'react';
import { connect } from 'react-redux';
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
import { bindActionCreators } from 'redux';
import { toggleMark, remove } from '../actions/todoActions';

const TodoList = (props: any) => {

    const renderText = (todo: any) => {
        if(todo.status) return (<Text as='del'>{todo.name}</Text>)
        return (<Text>{todo.name}</Text>)
    }

    const renderRows = () => {
        const list = props.list || [];
        const { toggleMark, remove } = props;

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
                          onClick={() => toggleMark(todo.id, true, todo.name)}
                          hidden={todo.status}
                        />
                        <IconButton
                          aria-label='task-undone'
                          icon={<RepeatIcon />}
                          colorScheme='yellow'
                          size='lg'
                          mr={2}
                          onClick={() => toggleMark(todo.id, false, todo.name)}
                          hidden={!todo.status}
                        />
                        <IconButton 
                            aria-label='delete-task' 
                            icon={<CloseIcon />} 
                            colorScheme='red'
                            size='lg'
                            onClick={() => remove(todo.id)}
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

const mapStateToProps = (state: any) => ({list: state.todo.list})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({toggleMark, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);