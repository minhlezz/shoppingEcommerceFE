import styled from "styled-components";


export const Wrapper = styled.div`
    margin-bottom: 80px;
    background-color: rgba(0,0,0, .5);
    & > * ~ * {
        margin-top: 70px;
    }
`

export const Title = styled.div`
    font-size: 2rem;
    text-transform: capitalize;
`

export const Body = styled.div`

`
