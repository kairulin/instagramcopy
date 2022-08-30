import React from 'react'
import { Btn, CarouselBox, Circle, Name, User } from './style'

const users = [
    {
        name: 'No.1'
    },
    {
        name: 'No.2'
    },
    {
        name: 'No.3'
    },
    {
        name: 'No.4'
    },
    {
        name: 'No.5'
    }
    ,
    {
        name: 'No.6'
    }
]

const Carousel = () => {
    return (
        <CarouselBox>
            <Btn>
                {users.map((item, index) => (
                    <User>


                        <Circle />
                        <Name key={index}>{item.name}</Name>


                    </User>
                ))}

            </Btn>
        </CarouselBox>
    )
}

export default Carousel