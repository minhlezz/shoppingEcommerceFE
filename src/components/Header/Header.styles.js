import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 99;
    user-select: none;
`;

export const Content = styled.div`
    max-width: var(--max-width);
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 82px;
    width: 100%;
    background-color: rgba(0,0,0, .1);
`;

export const List = styled.div`
    display: flex;
    align-items: center;
`;

export const Linked = styled(Link)`
    position: relative;
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;

    :first-child {
        font-size: 2.5rem;
        margin-right: 20px;
        letter-spacing: 2px;
    }

    &:not(:first-child) {
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
`;

export const Cart = styled.div`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 12px 15px;
`;

