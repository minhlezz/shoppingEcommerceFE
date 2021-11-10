import React from 'react'
import {Wrapper, Title, Body} from './Section.styles'


const Section = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export const SectionTitle = props => {
    return (
        <Title>
            {props.children}
        </Title>
    )
}

export const SectionBody = props => {
    return (
        <Body>
            {props.children}
        </Body>
    )
}

export default Section
