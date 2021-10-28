import React from 'react'
import { Wrapper } from './InfiteList.styles'
import Grid from '../Grid/'
import ProductCard from '../ProductCard'

const InfiniteList = ({ data }) => {
    return (
        <Wrapper>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                    data && data.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image01}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            slug={item.slug}
                        />
                    ))
                }

            </Grid>
        </Wrapper>
    )
}

export default InfiniteList
