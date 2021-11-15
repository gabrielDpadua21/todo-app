import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { CheckCircleIcon } from '@chakra-ui/icons';

const LogoBox = styled.span`
font-wight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover {
    color: #ccc;
}
`

const Logo = () => {
    return (
        <Link to='/'>
            <LogoBox>
                <CheckCircleIcon />
                <Text
                   color='gray.800'
                   fontWeight='bold'
                   ml={3}
                >
                    Todo APP
                </Text>
            </LogoBox>
        </Link>
    );
}

export default Logo;