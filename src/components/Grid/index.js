import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = ({ col, smCol, mdCol, gap, children }) => {
    return (
        <Wrapper
            col={col}
            smCol={smCol}
            mdCol={mdCol}
            gap={gap}
        >
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    gap: ${({ gap }) => gap ? `${gap}px` : ''};
    
    @media only screen and (max-width: 1200px) {
        grid-template-columns: ${({ mdCol }) => `repeat(${mdCol}, 1fr)`};
    }

    @media only screen and (max-width: 960px) {
        /* grid-template-columns: ${({ smCol }) => `repeat(${smCol}, 1fr)`}; */
        /* grid-template-columns: ${({ smCol }) => smCol > 1 ? `` : `repeat(auto-fit,minmax(auto, 350px))`}; */
        grid-template-columns:  repeat(auto-fit,minmax(auto, 300px));
        justify-content: center;
    }

`

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    smCol: PropTypes.number,
    mdCol: PropTypes.number,
    gap: PropTypes.number,
}

export default Grid
