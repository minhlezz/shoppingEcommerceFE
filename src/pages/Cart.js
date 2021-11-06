import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import productData from '../assets/fake-api/product.data';
import CartItem from '../components/CartItem';
import Grid  from '../components/Grid';

const CustomFlex = styled.div`
    padding-top: 150px;
`

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.value);
    console.log(productData.getCartItemsInfo(cartItems));

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <CustomFlex>
            <Grid col={1} mdCol={1} smCol={1} gap={20}>
                <CartItem />
                <CartItem />
            </Grid>
        </CustomFlex>
    )
}

export default Cart
