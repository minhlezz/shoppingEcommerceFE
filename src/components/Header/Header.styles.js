import styled from "styled-components";
import { device } from '../../GlobalStyles';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    user-select: none;
    background-color: rgba(0,0,0, .1);

`;

export const Content = styled.div`
    max-width: var(--max-width);
    padding: 0 40px;
    margin: 0 auto;
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
`;
export const HeaderInner = styled.div`
    display: flex;
    width: 100%;
    @media ${device.mobile} {
        justify-content: space-between;
        align-items: center;
    }
`
export const Logo = styled.div`

`

export const LogoLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.5rem;
    margin-right: 20px;
    letter-spacing: 2px;
    color: var(--yellow);
    
    @media (max-width: 500px) {
        font-size: 1.5rem;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    //Responsive
    @media ${device.desktop} {
        width: 100%;
    }
    @media ${device.mobile} {
        position: fixed;
        top: 0;
        left: ${props => props.toggle ? '0': '-100%'};
        bottom: 0;
        z-index: 98;
        width: 50%;
        padding: 16px;
        flex-direction: column;
        justify-content: flex-start;
        background-color: var(--lgrey);
        overflow-x: hidden;
        overflow-y: auto;
        transition: .3s cubic-bezier(.25,.46,.45,.94);
    }
    
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const MobileIcon = styled.div`
    display: none;
    
    @media ${device.mobile} {
        display: flex;
        align-items: center;
    }
`

export const Icon = styled.div`
    display: none;
    
    @media ${device.mobile} {
        display: block;
        width: 100%;
        padding: 12px 15px;
        position: relative;

        svg {
            float: right;
            height: 25px;
            width: 25px;
            &:hover {
                fill: var(--yellow);
            }
        }
    }
`

export const List = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media ${device.mobile} {
        flex-direction: column;
        align-items: flex-start;

        & > a {
         margin: 10px 0;
        }
    }
`;

export const Linked = styled(Link)`
    position: relative;
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    padding: 12px 15px;
    margin-right: 20px;

    ::before ,
    ::after {
            content: "";
            position: absolute;
            display: block;
            background-color: var(--yellow);
            width: 0;
            height: 2px;
            left: 0;
            right: 0;
            margin: 0 auto;
            opacity: .4;
            transition: all .2s;
    }

    /** Responsive */ 
    //Desktop
    @media screen and (min-width: 961px) {
        :hover {
            color: var(--yellow);
            background-color: rgba(0,0,0,.2);
            transition: all .2s;
            ::before,
            ::after {
                width: 100%;
            }
            ::before {
                top: 0;
            }
            ::after {
                bottom: 0;
            }
        }
    }
    
    //Mobile
    @media ${device.mobile} {
        font-size: 1.2rem;
        width: 100%;
        text-align: left;
        &:hover {
            color: var(--cyan);
            opacity: .9;
        }

      
    }
`;

export const User = styled.div`
    display: flex;

    @media ${device.mobile} {
        width: 100%;
        flex-direction: column;
        .cart {
            display: none;
        }
        & > a {
            margin: 10px 0;
        }
    }
`
export const UserLink = styled(Link)`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 12px 15px;
    text-decoration: none;
    color: #fff;
    position: relative;
    //disabled
    pointer-events: ${props => props.disabled ? 'none' : ''};

    svg {
        height: 25px;
        width: 25px;
    }
    &:hover {
        svg {
            stroke: var(--cyan);
            fill: var(--cyan);
        }
    }

    //Responsive
    p {
        display: none;
    }
    @media ${device.mobile} {
        display: flex;
        align-items: center;

        .cart {
            display: none;
        }

        & > p {
                display: unset;
                text-transform: none;
                font-size: 1rem;
                margin-left: 10px;
        }
       
    }
`;

export const CartQuantity = styled.span`
    position: absolute;
    top:0;
    right: 0;
    background-color: var(--orange);
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%,50%);
`


export const IconLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: #fff;
`

