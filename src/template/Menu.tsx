import React from 'react';
import Logo from '../components/Logo';
import {
    Container,
    Stack,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
    Box,
    Flex,
    Heading
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io5';

const Navbar = (props: any) => {
    return (
       <Box
       position='fixed'
       as='nav'
       w='100%'
       bg='#ffffff40'
       style={{backdropFilter:'blur(10px'}}
       zIndex={1}
       >
        <Container
            display='flex'
            p={2}
            mxW='container.md'
            wrap='wrap'
            align='center'
            justifyContent='space-between'
        >
            <Flex align='center' mr={5}>
                <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                    <Logo />
                </Heading>
            </Flex>
            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                flexGrow={1}
                mt={{base:4, nmd: 0}}
            >
                <Link to='/todo'>
                    Todo
                </Link>
                <Link to='/about'>
                    About
                </Link>
            </Stack>

            <Box
             flex={1}
             align='right'
            >
             <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                <Menu>
                    <MenuButton 
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant='outline'
                        aria-label='Options'
                    />
                    <MenuList>
                        <Link to='/todo'>
                            <MenuItem as={Link} to='/todo'>
                                Todo
                            </MenuItem>
                        </Link>
                        <Link to='/about'>
                            <MenuItem as={Link} to='/about'>
                                About
                            </MenuItem>
                        </Link>
                        <Link to='#'>
                            <MenuItem as={Link} to='#'>
                                <IoLogoGithub />
                                Source
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
             </Box>
            </Box>
        </Container>
       </Box> 
    );
}

export default Navbar;