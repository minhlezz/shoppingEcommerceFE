import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {
    Wrapper, Image, Content, ContentTop, ContentInfo, ContentPrice,
    ContentBottom, ContentEdit, ContentDelete, Icon, StyledLink
} from './CartItem.styles'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { updateItem, removeItem } from '../../redux/cartSlice'


const CartItem = (props) => {
    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {

        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
        }
        if (opt === '-') {
            dispatch(updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <Wrapper>
            <Image>
                <StyledLink to="/">
                    <img src={item.product.image01} alt="" />
                </StyledLink>
            </Image>
            <Content>
                <ContentTop>
                    <ContentInfo>
                        <StyledLink to={`/catalog/${item.slug}`}>
                            <h3>{item.product.title}</h3>
                        </StyledLink>
                        <p>size - <span>{item.size}</span></p>
                    </ContentInfo>
                    <ContentPrice>$<span>{item.price}</span></ContentPrice>
                </ContentTop>
                <ContentBottom>
                    <ContentEdit>
                        <Icon
                            onClick={() => updateQuantity('-')}
                            disabled={quantity === 1 ? true : false}
                        ><FaMinus /></Icon>
                        <span>{quantity}</span>
                        <Icon
                            onClick={() => updateQuantity('+')}
                        ><FaPlus /></Icon>
                    </ContentEdit>
                    <ContentDelete
                        onClick={() => removeCartItem()}
                    >
                        <FaTrashAlt />
                    </ContentDelete>
                </ContentBottom>
            </Content>
        </Wrapper>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
