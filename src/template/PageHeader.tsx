import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const PageHeader = (props: any) => (
    <Flex
        bg='blue.500'
        color='white'
        align='center'
        justify='left'
        padding={5}
        rounded={5}
    >
        <Heading as='h2' size='lg' pr={5}>
            {props.name} {props.small}
        </Heading>
    </Flex>
)

export default PageHeader;