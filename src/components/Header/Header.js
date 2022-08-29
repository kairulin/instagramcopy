import React, { useState,useRef } from 'react'
import { Container, HeaderBox, Icon, Placeholder, PlaceholderBox, SeachBox, Search, Title } from './style'
import { CgHome } from 'react-icons/cg'
import { AiFillHome, AiOutlineHome, AiFillCompass, AiOutlineCompass, AiFillPlusSquare, AiOutlinePlusSquare, AiFillMessage, AiOutlineMessage, AiFillHeart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'


const icons = [
    {
        fill: <AiFillHome />,
        nofill: <AiOutlineHome />
    },
    {
        fill: <AiFillMessage />,
        nofill: <AiOutlineMessage />
    },
    {
        fill: <AiFillPlusSquare />,
        nofill: <AiOutlinePlusSquare />
    },
    {
        fill: <AiFillCompass />,
        nofill: <AiOutlineCompass />
    },
    {
        fill: <AiFillHeart />,
        nofill: <AiOutlineHeart />
    },
]

const Header = () => {
    const [toggle, setToggle] = useState(0);

    const [inputText,setInputText] = useState("")

    const ref = useRef(null);
    const handleClick =() =>{
        ref.current.focus();
    }
    return (
        <HeaderBox>
            <Container>
                <Title>
                    Copygram
                </Title>

                <SeachBox>
                    <PlaceholderBox  onClick={handleClick}>
                        <AiOutlineSearch />
                        <Placeholder>{inputText ? inputText : "搜尋"}</Placeholder>
                    </PlaceholderBox>
                    <Search ref={ref} placeholder="搜尋" onChange={e => setInputText(e.target.value)}/>
                   
                </SeachBox>

                <Icon> 
                    {icons.map((item, index) => (
                        <div key={index} onClick={() => setToggle(index)}>
                            { toggle === index ? item.fill : item.nofill}
                        </div>
                    ))}
                  
                </Icon>
            </Container>
        </HeaderBox>
    )
}

export default Header