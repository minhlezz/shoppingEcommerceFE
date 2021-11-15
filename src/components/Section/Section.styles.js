import styled from "styled-components";


export const Wrapper = styled.div`
    padding-top: 50px;
    margin-bottom: 80px;
    & > * ~ * {
        margin-top: 70px;
    }
`

export const Title = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
`

export const Body = styled.div`
    position: relative;
`
