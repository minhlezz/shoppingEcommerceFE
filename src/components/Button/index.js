import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Button.styles'


const Button = ({ children, color, onClick }) => {
    return (
        <Wrapper color={color} onClick={onClick}>
            {children}
        </Wrapper>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
