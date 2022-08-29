import styled from "styled-components";

export const HeaderBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:3.5rem;
    background:#111;
`
export const Container = styled.div`
    width:90%;  
    display:grid;
    margin-left:17rem;
    grid-template-columns: 18rem auto 33rem;
    color:white;
`

export const Title = styled.span`
    font-size:1.5rem;
`
export const SeachBox = styled.div`
    display:flex;
`
export const PlaceholderBox = styled.div`
    position:absolute;
    width:15rem;
    height:2rem;
    svg{
        position:relative;        
        font-size:1.2rem;
        top: 50%;
        transform: translateY(-50%);
        left:1rem;
        color:#111;
    }
`
export const Placeholder = styled.div`
    display:flex;
    position:absolute;
    left:2.5rem;
    color:#111;
    top: 50%;
    transform: translateY(-50%);
    white-space:nowrap;
    overflow:hidden;
    user-select: none;

`

export const Search = styled.input`
    width:15rem;
    height:2rem;
    border-radius:5px;
    border:none;
    padding-left:1rem;
    color:white;
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
    gap:.75rem;
    cursor: pointer;
    svg{
        width:1.75rem;
        height:1.75rem;
        /* color:black; */
        /* color:${({ toggle }) => toggle ? 'white' : ''}; */
    }
`