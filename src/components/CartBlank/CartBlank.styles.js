import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from '../../GlobalStyles'


export const Wrapper = styled.div`
    position: relative;
`


export const Image = styled.div`
    position: relative;
    img {
        height: 350px;
        width: 100%;
        object-fit: contain;
    }
`

export const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    margin-top: 24px;
`

export const StyledButton = styled(Button)`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 1.5rem;

    &:hover{
        opacity: .9;
        background-color: var(--cyan);
        color: #fff;
    }
`
export const Title = styled.div`
    text-transform: uppercase;
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;

    span {
      font-size: 2rem;
      letter-spacing: 5px;
      line-height: 1;
    }

    p {
        font-size: 1rem;
        text-transform: none;
        color: var(--grey);
    }
`