import React from 'react'
import {
    Wrapper, CardLink, CardImage, CardBottom,
    CardContent, CardTop, CardTitle, CardDescription
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
                    <CardTop>
                        FROM
                        <span>${price}</span>
                    </CardTop>
                    <CardBottom>
                        <CardTitle>
                            <h3>{title}</h3></CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardBottom>
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
