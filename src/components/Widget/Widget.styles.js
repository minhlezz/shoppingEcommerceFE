import styled from "styled-components"


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    margin-top: 20px;
    `

export const Title = styled.div`
    text-align: center;
    position: relative;

    ::before {
        content: "";
        width: 100%;
        position: absolute;
        border-top: 1px dashed grey;
        left: 0;
        bottom: 12px;
    }

    span {
        position: relative;
        z-index: 2;
        padding: 0 15px;
        background-color: #353444;
    }
`

export const Content = styled.div`
    display: flex;
`

