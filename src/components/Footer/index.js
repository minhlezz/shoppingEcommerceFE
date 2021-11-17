import React from 'react'
import { Container } from '../../GlobalStyles'
import Grid from '../Grid'
import { Wrapper, FooterTitle, FooterContent, StyledLink, Logo } from './Footer.styles'


const footerSocialLinks = [
    {
        display: "Facebook",
        path: "/"
    },
    {
        display: "Instagram",
        path: "/"
    },
    {
        display: "Youtube",
        path: "/"
    },
    {
        display: "Twitter",
        path: "/"
    },
    {
        display: "Telegram",
        path: "/"
    },
]

const footerUsefulLinks = [
    {
        display: "FAQ",
        path: "/"
    },
    {
        display: "Carrers",
        path: "/"
    },
    {
        display: "Contact",
        path: "/"
    },
    {
        display: "Wholesale",
        path: "/"
    },
]

const footerAboutLinks = [
    {
        display: "My Account",
        path: "/"
    },
    {
        display: "Cart",
        path: "/"
    },
]

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Grid col={4} mdCol={2} smCol={1}>
                    <Logo>
                        <h1>Stay <br /> In <br />Touch</h1>
                    </Logo>
                    <div>
                        <FooterTitle>We're Social</FooterTitle>
                        <FooterContent>
                            {footerSocialLinks && footerSocialLinks.map((ele, index) => (
                                <StyledLink to={ele.path} key={index}>
                                    <p>{ele.display}</p>
                                </StyledLink>
                            ))}
                        </FooterContent>
                    </div>
                    <div>
                        <FooterTitle>Useful</FooterTitle>
                        <FooterContent>
                            {footerUsefulLinks && footerUsefulLinks.map((ele, index) => (
                                <StyledLink to={ele.path} key={index}>
                                    <p>{ele.display}</p>
                                </StyledLink>
                            ))}
                        </FooterContent>
                    </div>
                    <div>
                        <FooterTitle>About</FooterTitle>
                        <FooterContent>
                            {footerAboutLinks && footerAboutLinks.map((ele, index) => (
                                <StyledLink to={ele.path} key={index}>
                                    <p>{ele.display}</p>
                                </StyledLink>
                            ))}
                        </FooterContent>
                    </div>
                </Grid>
            </Container>
        </Wrapper >
    )
}



export default Footer
