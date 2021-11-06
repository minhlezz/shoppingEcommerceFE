import styled from "styled-components";
import { Button } from '../../GlobalStyles';


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const Content = styled.div`
    position: relative;
`

export const Image = styled.div`
    position: relative;
    float: left;
    width: 60%;
    padding-top: 50%;
    .img_product {
        position: absolute;
        height: 100%;
        z-index: 3;
        top:0;
    }

    .img_wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1;
    }

 
`

export const ProductInfo = styled.div`
    float: right;
    width: 40%;
    background-color: var(--lgrey);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%);
    border-radius: 8px;
    padding: 64px;

    & > h1 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: .0625rem;
        line-height: 1;
        margin-bottom: 32px;
    }
`

export const Price = styled.div`
    margin: 16px 0;
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
    margin: 16px 0;
`

export const RoastLevel = styled.div`
    margin-left: 10px;
`

export const Taste = styled.div`
    margin: 16px 0;
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
`
export const Label = styled.label`
    background-color: ${props => props.isSize ? 'var(--cyan)' : 'var(--grey)'};
    border-radius: 8px;
    height: 100%;
    padding: 10px 12px;
    flex-basis: 33.333%;
    flex-shrink: 1;
    text-align: center;
    margin-left: 5px;
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
    border: 1px solid #bcbcbc;
    border-radius: 30px;
    margin-top: 32px;
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
    margin-top: 32px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    user-select: none;
    &:hover {
        background-color: var(--cyan);
        opacity: .9;
        color: #fff;
    }
`

export const ProductDetail = styled.div`
    width: 60%;
    padding-bottom: 100px;
    padding-right: 40px;
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
`