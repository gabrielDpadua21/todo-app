import { Container } from "@chakra-ui/layout";
import React from "react";
import PageHeader from "../template/PageHeader";

const About = () => {
    return (
        <Container maxW='container.lg'>
            <PageHeader name='Sobre' small='Nós' />
        </Container>
    )
}

export default About;
