import React from 'react'
import {
    Wrapper, Card, CardImage, CardContent, Title,
    Price, Info
} from './ProductSlider.styles'


const ProductSlider = () => {
    return (
        <Wrapper>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Wrapper>
    )
}

const ProductItem = () => {

    return (
        <Card>
            <CardImage>
                <img src={"https://camposcoffee.com/wp-content/uploads/2016/09/500G_Front_ORGANIC-300x300.png"}
                    alt="" />
            </CardImage>
            <CardContent>
                <Title>Comlumbia Blend</Title>
                <Price>$50.00</Price>
                <Info>Teast like shiht ah</Info>
            </CardContent>
        </Card>
    )
}

export default ProductSlider
