import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from '../../GlobalStyles'

export const Wrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    
`

export const Content = styled.div`
    position: relative;
    margin-left: -12px;
    display: flex;
`

export const Order = styled.div`
    width: 60%;
    padding: 0 12px;
    h1 {
        margin-bottom: 24px;
    }
`

export const Checkout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 12px;
    background-color: var(--lgrey);
    width: 40%;
    z-index: 3;
    top: 0;
    right: 0;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 50%), 0 1px 2px 0 rgb(0 0 0 / 10%);
    padding: 0 12px;

`

export const CheckoutItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const Item = styled.div`
    display:  flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px 0;
    border-bottom: 1px solid var(--grey);
  
`

export const ItemInfo = styled.div`
    display: flex;
    img {
        height: 90px;
    }
`

export const Info = styled.div`
    font-size: 0.875rem;
    h3 {
        text-transform: uppercase;
        font-size: 0.875rem;

    }

`

export const ItemTotalPrice = styled.div`
    font-size: 0.875rem;
    span {

    }
`

export const CheckoutTotal = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    
    div {
        padding: 24px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid var(--grey);
 
        :last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 1rem;
        }
    }

   
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
 
`

export const StyledButton = styled(Button)`
    margin-bottom: 12px;
    width: 100%;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover {
        opacity: .9;
        background-color: var(--cyan);
        color: #fff;
    }
`
