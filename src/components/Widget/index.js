import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Content } from './Widget.styles'

const Widget = ({ children }) => {
    return (
        <Wrapper>
            <Title>
                <span>Races</span>
            </Title>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

Widget.propTypes = {

}

export default Widget
