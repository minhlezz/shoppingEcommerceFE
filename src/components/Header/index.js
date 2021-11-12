import React, { useState } from 'react'
import {
    Wrapper, Content, List, Linked, User, UserLink, HeaderInner,
    Logo, LogoLink, Menu, Icon, MobileIcon, CartQuantity, IconLink
} from './Header.styles';
import { FaOpencart, FaUser, FaTimes, FaBars } from 'react-icons/fa'
import Overlay from './Overlay';


const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Wrapper>
            <Content>
                <HeaderInner>
                    <Logo>
                        <LogoLink to="/">Cafelify</LogoLink>
                    </Logo>
                    <Menu toggle={toggle} onClick={() => handleToggle()}>
                        <Icon onClick={() => handleToggle()}>
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
                            <IconLink to="/cart">
                                <FaOpencart />
                                <CartQuantity>2</CartQuantity>
                            </IconLink>
                        </Icon>
                        <Icon onClick={() => handleToggle()}>
                            <FaBars />
                        </Icon>
                    </MobileIcon>
                    <Overlay toggle={toggle} onClick={() => handleToggle()} />
                </HeaderInner>
            </Content>
        </Wrapper>
    )
}

export default Header
