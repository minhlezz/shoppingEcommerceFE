import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, device } from '../../GlobalStyles';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    user-select: none;
    padding-top: 82px;
`

export const Background = styled.div`
    height: 650px;
    width: 100%;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(80%);

    }

`

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    width: 100%;
    overflow: hidden;
`
export const Title = styled.div`
    width: 70%;
    h1 {
        font-size: 3rem;
        text-shadow: 2px 2px 20px rgb(0 0 0 / 20%);
        letter-spacing: 0.0625rem;
        line-height: 1;
    }

    @media ${device.mobile} {
        h1 {
            font-size: 2.5rem;
        }
    }

`

export const CustomButton = styled(Button)`
    margin-top: 30px;
    color: #fff;
    background-color: var(--cyan);
    font-weight: 700;
    z-index: 3;
    &:hover {
        color: var(--yellow);
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const Image = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
    overflow: hidden;
    img {
        height: 100px;
        width: 100px;   
    }
`