import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Post from '../components/Post/Post'
import { MainBox } from './style'

const Main = () => {
  return (
    <>
      <MainBox>
        <Carousel />
        <Post/>
      </MainBox>
    </>
  )
}

export default Main