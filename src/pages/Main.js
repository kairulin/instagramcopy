import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Post from '../components/Post/Post'
import Recommend from '../components/Recommend/Recommend'
import { LeftBox, MainBox, RightBox } from './style'

const Main = () => {
  return (
    <>
      <MainBox>
        <LeftBox>
          <Carousel />
          <Post />

        </LeftBox>
        <RightBox>
          <Recommend />

        </RightBox>
      </MainBox>
    </>
  )
}

export default Main