import React from 'react'
import { Btn, CarouselBox, Circle, Name, User } from './style'

const users = [
    {
        name: 'User1'
    },
    {
        name: 'User2'
    },
    {
        name: 'User3'
    },
    {
        name: 'User4'
    },
    {
        name: 'User5'
    }
    ,
    {
        name: 'User6'
    }
]

const Carousel = () => {
    return (
        <CarouselBox>
            <Btn>
                {users.map((item, index) => (
                    <User key={index}>
                        <Circle />
                        <Name >{item.name}</Name>
                    </User>
                ))}

            </Btn>
        </CarouselBox>
    )
}

export default Carousel