import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../GlobalStyles'
import ProductView from '../components/ProductView'
import productData from '../assets/fake-api/product.data'

const StyledFlex = styled(Flex)`
    padding-top: 150px;
    user-select: none;
`

const Product = (props) => {
    const product = productData.getProductBySlug(props.match.params.slug)
    const relatedProduct = productData.getProducts(3)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Container>
            <StyledFlex>
                <ProductView
                    product={product}
                    relatedProduct={relatedProduct}
                />
            </StyledFlex>
        </Container>
    )
}

export default Product
