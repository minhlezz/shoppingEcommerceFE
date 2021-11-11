import React from 'react'
import {
    Wrapper, Content, List, Linked, User, UserLink, HeaderInner,
    Logo, LogoLink, Menu, Icon, MobileIcon, CartQuantity
} from './Header.styles';
import { FaOpencart, FaUser, FaTimes, FaBars } from 'react-icons/fa'


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <HeaderInner>
                    <Logo>
                        <LogoLink to="/">Cafelify</LogoLink>
                    </Logo>
                    <Menu>
                        <Icon>
                            <FaTimes />
                        </Icon>
                        <List>
                            <Linked to="/catalog">Coffee</Linked>
                            <Linked to="/">Our Story</Linked>
                            <Linked to="/">Guide</Linked>
                        </List>
                        <User>
                            <UserLink to="/cart" className="cart">
                                <FaOpencart />
                                <CartQuantity>2</CartQuantity>
                            </UserLink>
                            <UserLink to="/login" disabled >
                                <FaUser />
                                <p>Log in or register</p>
                            </UserLink>
                        </User>
                    </Menu>
                    <MobileIcon>
                        <Icon>
                            <FaOpencart />
                            <CartQuantity>2</CartQuantity>
                        </Icon>
                        <Icon>
                            <FaBars />
                        </Icon>
                    </MobileIcon>
                </HeaderInner>
            </Content>
        </Wrapper>
    )
}

export default Header
