import styled from "styled-components";
import { Button } from '../../GlobalStyles';


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const Content = styled.div`
    position: relative;
    display: flex;
    margin-left: -12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const ProductOverview = styled.div`
    width: 60%;
    padding-left: 12px;
    padding-right: 12px;
    flex-grow: 1;
    @media (max-width: 960px) {
        width: 100%;
    }
`

export const Image = styled.div`
    position: relative;
    padding-top: 60%;
    
    &:hover {
        transform: scale(1.2);
    }
    .img_product {
        position: absolute;
        height: 100%;
        z-index: 3;
        top: 0;
        right: 0;
        transform: translateX(-40%);
    }

    .img_wrapper {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        transform: translateX(-40%);
        z-index: 1;
    }

    @media (max-width: 500px) {
        padding-top: 100%;
        .img_product {
            left: 0;
            transform: unset;
        }

        .img_wrapper {
            transform: unset;
        }
    }
`



export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 24px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%);
    background-color: var(--lgrey);
    border-radius: 8px;

    & > div {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    @media (min-width: 961px) {
        padding-left: 12px;
        padding-right: 12px;
        width: 40%;
        padding: 32px;
        flex-grow: 0;
        max-height: 650px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > h1 {
            font-weight: bold;
            text-transform: uppercase;
            font-size: 3rem;
            letter-spacing: .0625rem;
            line-height: 1;
        }
    }

    @media (max-width: 1200px) {
        h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 350px) {
        padding: 12px;
        h1 {
            font-size: 1.5rem;
        }
    }

`

export const Price = styled.div`
    text-transform: uppercase;
    font-weight: 700;

    label {
        margin-right: 10px;
    }
    span {
        font-size: 14px;
        font-weight: 400;
    }
`

export const Roast = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
`

export const RoastLevel = styled.div`
    margin-left: 10px;
`

export const Taste = styled.div`
    display: flex;
    label {
        text-transform: uppercase;
        font-weight: 700;
        margin-right: 10px;
    }
    & > div {
        font-weight: 400;
        font-size: 14px;
    }
`

export const BagSize = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    
    h1 {
        font-size: 1rem;
    }
`

export const Size = styled.div`
    margin-top: 16px;
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: center;
`
export const Label = styled.label`
    background-color: ${props => props.isSize ? 'var(--cyan)' : 'var(--grey)'};
    border-radius: 8px;
    height: 100%;
    padding: 10px 12px;
    flex-basis: 33.333%;
    flex-shrink: 1;
    text-align: center;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
//Quantity
export const Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 54px;
    width: 100%;
    border: 1px solid #bcbcbc;
    border-radius: 30px;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;

`

export const QuantityNumber = styled.div`
    background: transparent;
    outline: none;
    border: none;
    pointer-events: none;
    color: #fff;
    text-align: center;
    font-weight: 700;
`
export const Icon = styled.div`
    width: 30px;
    height: 30px;
    cursor: ${({ disabled }) => disabled ? '' : 'pointer'};
    display: flex;
    align-items: center;

    svg {
        fill: ${({ disabled }) => disabled ? 'var(--grey)' : 'var(--cyan)'}
    }

`


export const CartButton = styled(Button)`
    width: 100%;
    height: 50px;
    cursor: pointer;
    user-select: none;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background-color: var(--cyan);
        opacity: .9;
        color: #fff;
    }
`

export const ProductDetail = styled.div`
    width: 100%;
    padding-bottom: 50px;
    h2 {
        text-transform: uppercase;
        font-size: 1.5rem;
        margin: 24px 0;
    }
    & > p {
        line-height: 1.6;
    }
`

export const InforContent = styled.div`
    padding: 8px 8px 8px 0;
    h3 {
        text-transform: uppercase;
        font-weight: 700;
    }

    p {
        font-size: 14px;
    }
`

export const RelatedProduct = styled.div`
    padding-bottom: 100px;
    h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 24px;
        color: var(--cyan);
    }

    @media (max-width: 960px) {
        margin-top: 50px;
    }
`