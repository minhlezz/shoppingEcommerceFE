import React from 'react'
import { Wrapper, Content, List, Linked, Cart, } from './Header.styles';


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <List>
                    <Linked to="/">Coffeelify</Linked>
                    <Linked to="/catalog">Coffee</Linked>
                    <Linked to="/">Items</Linked>
                    <Linked to="/">Guide</Linked>
                </List>
                <Cart>Cart</Cart>
            </Content>
        </Wrapper>
    )
}

export default Header
