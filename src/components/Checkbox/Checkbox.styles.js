import styled from "styled-components";


export const Wrapper = styled.label`
    display: inline-flex;
    align-items: center ;
`


export const HiddenCheckbox = styled.input.attrs({
    type: 'checkbox'
})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`


export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
    border-radius: 3px;
    transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    } 

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`
