import styled from "styled-components"
import { Link } from "react-router-dom"


export const Wrapper = styled.div`
    display: flex;
    background-color: var(--lgrey);
    width: 100%;
    border-radius: 8px;
    :not(:last-child) {
        margin-bottom: 10px;
    }
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    img {
        height: 90px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 12px;
`

export const ContentTop = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5px;
    align-items: baseline;
`

export const ContentInfo = styled.div`
    
    & > a {
        display: block;
        text-transform: uppercase;
        font-weight: 500;
        h3 {
            font-size: 1rem;
        }
    }

    & > p {
        font-size: 1rem;
        & > span {
            text-transform: uppercase;
        }
    }
`

export const ContentPrice = styled.div`
    margin-left: auto;
    font-size: 1rem;
    font-weight: 500;
`

export const ContentBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 5px 0;
`

export const ContentEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    border: 1px solid #bcbcbc;
    border-radius: 30px;
    width: 250px;
`

export const ContentDelete = styled.div`
    margin-left: auto;
    cursor: pointer;
    svg {
        fill: var(--cyan);
        height: 20px;
        width: 20px;
        opacity: .9;

        &:hover{
            opacity: 1;
        }
    }
`

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    cursor: ${({ disabled }) => disabled ? '' : 'pointer'};
    display: flex;
    align-items: center;

    svg {
        fill: ${({ disabled }) => disabled ? 'var(--grey)' : 'var(--cyan)'};
        opacity: .8;
        &:hover{
            opacity: 1;
        }
    }

`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`
