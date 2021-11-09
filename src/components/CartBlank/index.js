import React from 'react'
import { Wrapper, Image, StyledLink, StyledButton, Title } from './CartBlank.styles'
import emptyCart from '../../assets/images/empty-cart2.png'

const CartBlank = () => {
    return (
        <Wrapper>
            <Title><span>Opps....!!!</span></Title>
            <Image>
                <img src={emptyCart} alt=" " />
            </Image>
            <Title>Empty Cart</Title>
            <Title><p>Add more items to it now ?</p></Title>
            <StyledLink to="/catalog">
                <StyledButton>
                    Return To Shop
                </StyledButton>
            </StyledLink>


        </Wrapper>
    )
}

export default CartBlank
