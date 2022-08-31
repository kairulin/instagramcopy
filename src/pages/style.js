import styled from "styled-components";

export const MainBox = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    /* align-items:center; */
    gap:1rem;
`

export const LeftBox = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;

    @media screen and (max-width: 1024px) {
        justify-content:center;
    }
`

export const RightBox = styled.div`
    margin-top:16px;
    width: 319px;
    @media screen and (max-width: 1024px) {
        display:none;
    }
`