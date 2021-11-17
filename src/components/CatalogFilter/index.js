import React from 'react'
import { Wrapper, Content, ContentTop, ContentBody, ContentItem } from './CatalogFilter.styles'
import Button from '../Button'
import Widget from '../Widget'
import Checkbox from '../Checkbox'
import Category from '../../assets/fake-api/category.data'
import Size from '../../assets/fake-api/product-size.data'


const CatalogFilter = (props) => {
    return (
        <Wrapper >
            <Content>
                <ContentTop>
                    <p>Filters</p>
                    <Button onClick={props.handleClearFilter}>Clear Filter</Button>
                </ContentTop>
                <ContentBody>
                    <Widget title={'Category'}>
                        {Category && Category.map((item, index) => {
                            return (
                                <ContentItem key={index}>
                                    <Checkbox
                                        label={item.display}
                                        onChange={(input) => props.filterProducts("CATEGORY", input.checked, item)}
                                        checked={props.filter.category.includes(item.categorySlug)}
                                    />
                                </ContentItem>
                            )
                        })}
                    </Widget>
                    <Widget title={'Size'}>
                        {Size && Size.map((item, index) => {
                            return (
                                <ContentItem key={index}>
                                    <Checkbox
                                        label={item.display}
                                        onChange={(input) => props.filterProducts("SIZE", input.checked, item)}
                                        checked={props.filter.size.includes(item.size)}
                                    />
                                </ContentItem>
                            )
                        })}
                    </Widget>
                </ContentBody>
            </Content>
        </Wrapper>
    )
}

export default CatalogFilter
