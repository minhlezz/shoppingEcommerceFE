import styled from "styled-components";

export const Wrapper = styled.button`
    position: relative;
    display: inline-block;
    padding: 5px 10px;
    color: ${({ color }) => color ? color : 'var(--white)'};
    border:  ${({ color }) => color ? `1px solid ${color}` : 'none'};
    background-color: ${({ color }) => color ? 'transparent' : 'grey'};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .3s;
    border-radius: 5px;
    outline: none;
    
    :hover {
        opacity: .9;
        color: var(--white);
        background-color: var(--cyan);
    }
`