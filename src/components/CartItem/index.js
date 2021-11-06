import React, { useState } from 'react'
import {
    Wrapper, Image, Content, ContentTop, ContentInfo, ContentPrice,
    ContentBottom, ContentEdit, ContentDelete, Icon, StyledLink
} from './CartItem.styles'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'

const CartItem = () => {

    const [quantity, setQuantity] = useState(1)

    return (
        <Wrapper>
            <Image>
                <StyledLink to="/">
                    <img src="https://camposcoffee.com/wp-content/uploads/2018/11/500G_Front_SUPERIOR-300x300.png" alt="" />
                </StyledLink>
            </Image>
            <Content>
                <ContentTop>
                    <ContentInfo>
                        <StyledLink to="/">
                            <h3>Campos Superior blend</h3>
                        </StyledLink>
                        <p>size - <span>s</span></p>
                    </ContentInfo>
                    <ContentPrice>$<span>15.00</span></ContentPrice>
                </ContentTop>
                <ContentBottom>
                    <ContentEdit>
                        <Icon
                            disabled={quantity === 1 ? true : false}
                        ><FaMinus /></Icon>
                        <span>1</span>
                        <Icon><FaPlus /></Icon>
                    </ContentEdit>
                    <ContentDelete>
                        <FaTrashAlt />
                    </ContentDelete>
                </ContentBottom>
            </Content>
        </Wrapper>
    )
}

export default CartItem
