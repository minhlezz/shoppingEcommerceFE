import React from 'react'
import CartBlank from '../CartBlank'
import CartItem from '../CartItem'
import {
    Wrapper, Content, Order, Checkout, CheckoutItem, Item, StyledLink,
    ItemInfo, ItemTotalPrice, CheckoutTotal, Info, StyledButton
} from './CartView.style'

const CartView = (props) => {

    const xPrice = (a, b) => {
        return a * b;
    }
    
    return (
        <Wrapper className="wrapper">
            {props.cartProducts.length > 0 ?
                (
                    <Content className="cart">
                        <Order>
                            <h1>Your Order</h1>
                            {props.cartProducts?.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))}

                        </Order>
                        <Checkout>
                            <CheckoutItem>
                                {props.cartProducts?.map((item, index) => (
                                    <Item key={index}>
                                        <ItemInfo>
                                            <img src={item.product.image01} alt="" />
                                            <Info>
                                                <h3>{item.product.title}</h3>
                                                <strong><span>x</span>{item.quantity}</strong>
                                            </Info>
                                        </ItemInfo>
                                        <ItemTotalPrice><span>${xPrice(item.price, item.quantity)}</span></ItemTotalPrice>
                                    </Item>
                                ))}

                            </CheckoutItem>
                            <CheckoutTotal>
                                <div>
                                    <h4>Subtotal</h4>
                                    <span>${props.totalPrice}</span>
                                </div>
                                <div>
                                    <h4>Shipping</h4>
                                    <span>$0.00</span>
                                </div>
                                <div>
                                    <h4>Total</h4>
                                    <span>${props.totalPrice}</span>
                                </div>
                            </CheckoutTotal>
                            <StyledLink to="/catalog">
                                <StyledButton>Continue Buying</StyledButton>
                            </StyledLink>
                            <StyledButton>Checkout</StyledButton>
                        </Checkout>
                    </Content>) : (<CartBlank />)
            }

        </Wrapper>
    )
}

export default CartView
