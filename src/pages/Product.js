import React from 'react'
import styled from 'styled-components'
import { Flex } from '../GlobalStyles'
import ProductView from '../components/ProductView'
import productData from '../assets/fake-api/product.data'

const StyledFlex = styled(Flex)`
    padding-top: 150px;
`

const Product = (props) => {
    const product = productData.getProductBySlug(props.match.params.slug)
    const relatedProduct = productData.getProducts(3)

    return (
        <>
            <StyledFlex>
                <ProductView 
                    product={product}
                    relatedProduct={relatedProduct}
                />
            </StyledFlex>
        </>
    )
}

export default Product
