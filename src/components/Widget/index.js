import React from 'react'
import Checkbox from '../Checkbox'
import { Wrapper, Title, Content, ContentItem } from './Widget.styles';

const Widget = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Content>
                {props.data && props.data.map((item, index) => {
                    return (
                        <ContentItem key={index}>
                            <Checkbox
                                label={item.display}
                                onChange={props.onChange} />
                        </ContentItem>
                    )
                })}
            </Content>
        </Wrapper>
    )
}

export default Widget
