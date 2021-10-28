import React from 'react'
import {
    Wrapper, CardLink, CardImage, CardContent, CardPrice, CardTitle, CardDescription
} from './ProductCard..styles'

import PropTypes from 'prop-types'


const ProductCard = ({ image, price, title, description, slug }) => {
    return (
        <Wrapper>
            <CardLink to={`/catalog/${slug}`}>
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardContent>
                    <CardPrice>
                        FROM
                        <span>${price}</span>
                    </CardPrice>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
            </CardLink>
        </Wrapper>
    )
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProductCard
