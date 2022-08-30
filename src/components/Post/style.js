import styled from "styled-components";

export const PostBox = styled.div`
    width:470px;
    height:auto;
    background:rgb(0,0,0);
    border:1px solid rgb(54,54,54);
    border-radius:8px;
`

export const Top = styled.div`
    box-sizing:border-box;
    width:100%;
    height:56px;
    padding:1rem;
    display:flex;
    justify-content:space-between;
`
export const TitleBox = styled.div`
    display:flex;
    align-items:center;
    gap:.5rem;
`

export const CircleImg = styled.div`
    border-radius:50px;
    width:42px;
    height:42px;
    background:rgb(54,54,54);
`

export const Img = styled.div`
    width:470px;
    height:470px;
    background:rgb(54,54,54);
`

export const IconBox = styled.div`
    display:flex;
    justify-content:space-between;
    height:40px;
    margin-top:4px;
    padding:0 12px 6px 12px;
    svg{
        padding: 8px;;
        width:24px;
        height:24px;
        cursor: pointer;
    }
`
export const LeftIcon = styled.div`
    display:flex;
    gap:.75rem;
    

`
export const RightIcon = styled.div`

`

export const Like = styled.span`
    font-size:bold;    
    display:block;
    padding:0px 12px 0px 12px;
    margin-bottom:8px;
`
export const User = styled.span`
    font-size:bold;    
    display:block;
    padding:0px 12px 0px 12px;
    margin-bottom:8px;
`
export const Time = styled.span`
    font-size:11px;    
    color:rgb(142,142,142);
    display:block;
    padding:0px 12px 0px 12px;
    margin-bottom:8px;
`
export const Bottom = styled.div`
    height:41px;
    padding:4px 12px 4px 12px;
    border-top: 1px solid rgb(38,38,38);
    display:flex;
    align-items:center;   
    svg{
        padding:8px 12px 8px 0;
        width:24px;
        height:24px;
    }
`
export const Message = styled.input`
    width:370px;
    background:rgb(0,0,0);
    border:none;
    display:flex;
    align-items:center;
`
export const PostButton = styled.div`
    cursor: pointer;
    color:rgb(0,149,246);
    font-weight:700;
`