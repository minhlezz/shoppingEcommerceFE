import React from 'react'
import styled from 'styled-components'
import { device } from '../../GlobalStyles'

const OverlayWrapper = styled.div`
    display: none;
    @media ${device.mobile} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0, .34);
        z-index: 10;
        display: ${props => props.toggle ? 'block' : 'none'};
    }
`

const Overlay = (props) => {
    return (
        <OverlayWrapper
            onClick={props.onClick}
            toggle={props.toggle} />
    )
}

export default Overlay
