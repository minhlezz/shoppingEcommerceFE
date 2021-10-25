import React from 'react'
import PropTypes from 'prop-types'
import {
    Wrapper,
    HiddenCheckbox,
    StyledCheckbox,
    Icon
} from './Checkbox.styles'

const Checkbox = ({ checked, label, ...props }) => (
    <>
        <Wrapper>
            <HiddenCheckbox
                checked={checked}
                {...props}
            />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24" >
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <span>{label}</span>
        </Wrapper>
    </>
)


Checkbox.propTypes = {

}

export default Checkbox
