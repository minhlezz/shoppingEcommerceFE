import styled from "styled-components";


export const Wrapper = styled.div`
    margin-bottom: 80px;

    & > * ~ * {
        margin-top: 70px;
    }
`

export const Title = styled.div`
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
`

export const Body = styled.div`

`
