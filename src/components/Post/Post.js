import React from 'react'
import { Bottom, CircleImg, IconBox, Img, LeftIcon, Like, Message, PostBox, PostButton, RightIcon, Time, TitleBox, Top, User } from './style'
import { FiMoreHorizontal, FiMessageCircle, } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineSmile } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { RiBookmarkLine } from 'react-icons/ri'


const Post = () => {
    return (
        <>
            <PostBox>
                <Top>
                    <TitleBox>
                        <CircleImg />
                        Post.1
                    </TitleBox>
                    <FiMoreHorizontal />
                </Top>
                <Img />
                <IconBox>
                    <LeftIcon>
                        <AiOutlineHeart />
                        <FiMessageCircle />
                        <FiSend />
                    </LeftIcon>
                    <RightIcon>
                        <RiBookmarkLine />
                    </RightIcon>
                </IconBox>
                <Like>
                    0 個讚
                </Like>
                <User>
                    User1
                </User>
                <Time>
                    1分鐘前
                </Time>
                <Bottom>
                    <AiOutlineSmile />
                    <Message placeholder='留言⋯⋯'/>
                    <PostButton>
                        發佈
                    </PostButton>
                </Bottom>
            </PostBox>
        </>
    )
}

export default Post