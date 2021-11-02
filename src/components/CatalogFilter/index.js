import React from 'react'
import { Wrapper, Content, ContentTop, ContentBody } from './CatalogFilter.styles'
import Button from '../Button'
import Widget from '../Widget'
import Category from '../../assets/fake-api/category.data'
import Size from '../../assets/fake-api/product-size.data'


const CatalogFilter = () => {

    return (
        <Wrapper >
            <Content>
                <ContentTop>
                    <p>Filters</p>
                    <Button>Clear Filter</Button>
                </ContentTop>
                <ContentBody>
                    <Widget
                        title={'Category'}
                        data={Category} />
                    <Widget
                        title={'Size'}
                        data={Size} />
                </ContentBody>
            </Content>
        </Wrapper>
    )
}

export default CatalogFilter
