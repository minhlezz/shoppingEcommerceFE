import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-left: -12px;
    overflow: auto;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
    border-radius: 15px;
    margin-left: 12px;
    margin-right: 12px;
    width: 100%;
`

export const CardImage = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const Title = styled.div``

export const Price = styled.div``

export const Info = styled.div``


