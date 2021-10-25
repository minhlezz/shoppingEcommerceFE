import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 10px;
`
export const Title = styled.div`
    position: relative;
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 500;

    span {
        padding: 0 15px;
        background-color: var(--lgrey);
        position: relative;
        z-index: 2;
    }

    ::before {
        content: "";
        width: 100%;
        position: absolute;
        border-top: 1px dashed grey;
        left: 0;
        top: 10px;
        transform: translateY(100%);
    }
`

export const Content = styled.div`
    user-select: none;
    margin-top: 10px;
`