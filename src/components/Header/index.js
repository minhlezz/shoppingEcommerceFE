import React from 'react'
import { Wrapper, Content, List, Linked, Cart, } from './Header.styles';


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <List>
                    <Linked to="/">Cafelify</Linked>
                    <Linked to="/catalog">Coffee</Linked>
                    <Linked to="/">Our Story</Linked>
                    <Linked to="/">Guide</Linked>
                </List>
                <Cart to="/cart" >Cart</Cart>
            </Content>
        </Wrapper>
    )
}

export default Header
