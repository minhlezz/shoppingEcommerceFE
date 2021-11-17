import React, { useState } from 'react'
import {
    Wrapper, Content, List, Linked, User, UserLink, HeaderInner,
    Logo, LogoLink, Menu, Icon, MobileIcon, CartQuantity, IconLink
} from './Header.styles';
import { FaOpencart, FaUser, FaTimes, FaBars } from 'react-icons/fa'
import Overlay from './Overlay';
import { useSelector } from 'react-redux';


const Header = () => {
    const cartItems = useSelector((state) => state.cartItems.value);
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const quantity = cartItems.map((item, index) => {
        return item.quantity
    })
    const total = quantity.reduce((acc, curr) => acc + curr, 0)

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
                                {total > 0 && (
                                    <CartQuantity>{total}</CartQuantity>
                                )}
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
                                {total > 0 && (
                                    <CartQuantity className="mobile">{total}</CartQuantity>
                                )}
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
