import React from 'react'
import { Wrapper, Title, Content } from './Widget.styles';

const Widget = (props) => {
    return (
        <Wrapper>
            <Title><span>{props.title}</span></Title>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}

export default Widget
