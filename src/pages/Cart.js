import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-api/product.data';
import CartView from '../components/CartView';
import { Container } from '../GlobalStyles';



const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.value);

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <Container>
            <CartView
                cartProducts={cartProducts}
                totalProducts={totalProducts}
                totalPrice={totalPrice}
            />
        </Container>
    )
}

export default Cart
