import React from 'react';
import {
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
    Box,
    Center,
    Wrap,
    WrapItem,
    Heading
} from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ExternalLinkIcon } from '@chakra-ui/icons';

export default (props: any) => {
    return (
        <Box p="20px" bg="blue.700" shadow="md" color="black">
            <Wrap spacing="30px" align="center">
                <WrapItem>
                    <Menu>
                        <MenuButton 
                            as={IconButton}
                            arial-label="Options"
                            icon={<HamburgerIcon />}
                            variant="ouline"
                        />
                        <MenuList>
                            <MenuItem as='a' href='/todo' icon={<AddIcon />}>
                                Todo
                            </MenuItem>
                            <MenuItem as='a' href='/about' icon={<ExternalLinkIcon />}>
                                About
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </WrapItem>
                <WrapItem>
                    <Center color="white">
                        <Heading as="h1">
                            TODO APP
                        </Heading>
                    </Center>
                </WrapItem>
            </Wrap> 
        </Box>
    );
}