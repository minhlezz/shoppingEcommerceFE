import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
    background-color: rgba(0,0,0,.1);
    border: 2px solid #353444;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    :hover {
        background-color: var(--lgrey);
        transform: translateY(-5px);
        box-shadow: 0 10px 24px 0 rgb(0 0 0 / 22%);
    }
`

export const CardLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CardImage = styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    flex-shrink: 0;
    img {
        position: absolute;
        height: 100%;
        z-index: 3;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const CardContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px;
`

export const CardTop = styled.div`
    flex-shrink: 0;
    span {
        margin-left: 5px;
        font-weight: 700;
    }
`
export const CardBottom = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CardTitle = styled.div`
    margin-top: 8px;
    font-size: 1.5rem;
    font-weight: 700;
    flex-shrink: 0;
`

export const CardDescription = styled.div`
    font-size: 1rem;
    font-weight: 400;
    margin-top: auto;
`
