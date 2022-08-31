import styled from "styled-components";

export const HeaderBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:60px;
    background:rgb(0,0,0);
    border-bottom: 1px solid rgb(54,54,54);
`
export const Container = styled.div`
    max-width: calc(935px + 40px);
    width:100%;  
    justify-content: space-between;
    display:flex;
    color:white;
`

export const Title = styled.div`
    cursor: pointer;
    font-size:1.5rem;
`
export const SeachBox = styled.div`
    display:flex;
    margin-left: 7rem;
    @media screen and (max-width: 860px) {
        margin-left:5rem;
    }
    @media screen and (max-width: 680px) {
        margin-left:2rem;
    }
    @media screen and (max-width: 640px) {
        display:none;
    }
`
export const PlaceholderBox = styled.div`
    position:absolute;
    width:15rem;
    height:2rem;
    border-radius: 8px;
    background: rgb(38,38,38);
    svg{
        position:relative;        
        font-size:1.2rem;
        top: 50%;
        transform: translateY(-50%);
        left:1rem;
        color:rgb(155,155,155);
    }
`
export const Placeholder = styled.div`
    display:flex;
    position:absolute;
    left:2.5rem;
    color:rgb(155,155,155);
    top: 50%;
    transform: translateY(-50%);
    white-space:nowrap;
    overflow:hidden;
    user-select: none;

`

export const Search = styled.input`
    width:15rem;
    height:2rem;
    border-radius:8px;
    border:none;
    padding-left:1rem;
    background:rgb(38,38,38);
    outline: none;
    color:rgb(250,250,250);
    &::placeholder{
        font-size:1.2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        top: 50%;
        transform: translateY(-50%);
        opacity:0;
    }

    &:focus{
        z-index:1;
        color:#111;
        &::placeholder{       
        opacity:1;

     }
    }
    
`

export const Icon = styled.div`
    display:flex;
    gap:1.5rem;
    cursor: pointer;
    svg{
        width:1.75rem;
        height:1.75rem;
    }

    @media screen and (max-width: 1024px) {
        margin-right:1.5rem;
    }
`