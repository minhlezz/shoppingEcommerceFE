import React from 'react'
import { Wrapper, Content, List, Linked, Cart, } from './Header.styles';


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <List>
                    <Linked to="/">Battlify</Linked>
                    <Linked to="/heroes">Heroes</Linked>
                    <Linked to="/">Items</Linked>
                    <Linked to="/">Guide</Linked>
                </List>
                <Cart>Cart</Cart>
            </Content>
        </Wrapper>
    )
}

export default Header
