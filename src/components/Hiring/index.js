import React from 'react'
import { Container } from '../../GlobalStyles'
import {
    Wrapper,
    ContentInfo,
    Title,
    StyledLink,
    ContentImage, Image, Info
} from './Hiring.styles'

const Hiring = () => {
    return (
        <Container>
            <Wrapper>
                <ContentImage>
                    <Image>
                        <img
                            src="https://images.unsplash.com/photo-1547420410-a9b34b528f59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                            alt="" />
                    </Image>
                </ContentImage>
                <ContentInfo>
                    <Info>
                        <Title>Coffee Carrers</Title>
                        <StyledLink to="/">Apply Now</StyledLink>
                    </Info>
                </ContentInfo>
            </Wrapper>
        </Container>
    )
}

export default Hiring
