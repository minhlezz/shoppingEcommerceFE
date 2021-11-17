import React, { useRef } from 'react'
import {
    Wrapper,
    HiddenCheckbox,
    StyledCheckbox,
    Icon
} from './Checkbox.styles'

const Checkbox = (props) => {
    const inputRef = useRef(null);
    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
        <>
            <Wrapper>
                <HiddenCheckbox
                    checked={props.checked}
                    onChange={onChange}
                    ref={inputRef}
                />
                <StyledCheckbox checked={props.checked}>
                    <Icon viewBox="0 0 24 24" >
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
                <span>{props.label}</span>
            </Wrapper>
        </>
    )
}


Checkbox.propTypes = {

}

export default Checkbox
