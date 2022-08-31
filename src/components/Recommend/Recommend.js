import React from 'react'
import { AccountName, AccountWho, Button, RecommendAccount, RecommendAll, RecommendBox, RecommendText, RecommendUser, RecommendUserBox, Self, SelfAccount, SelfBox, SelfName, UserCircle, WhoRecommend } from './style'


const recommendUser = [
    {
        account: "User7",
        who: "User1 的追蹤對象"
    },
    {
        account: "User8",
        who: "User2 + 其他 3 人的追蹤對象"
    },
    {
        account: "User9",
        who: "copygram 新用戶"
    },
    {
        account: "User10",
        who: "copygram 新用戶"
    },
    {
        account: "User11",
        who: "copygram 新用戶"
    }
]

const Recommend = () => {
    return (
        <>
            <SelfBox>
                <Self />
                <AccountName>
                    <SelfAccount>UserAccount</SelfAccount>
                    <SelfName>UserName</SelfName>
                </AccountName>
                <Button>切換</Button>
            </SelfBox>
            <RecommendText>
                <RecommendUser>推薦用戶</RecommendUser>
                <RecommendAll>查看全部</RecommendAll>
            </RecommendText>
            <RecommendBox>
                {recommendUser.map((item, index) => (
                    <RecommendUserBox key={index}>
                        <UserCircle />
                        <AccountWho>
                            <RecommendAccount>{item.account}</RecommendAccount>
                            <WhoRecommend>{item.who}</WhoRecommend>
                        </AccountWho>
                        <Button>追蹤</Button>

                    </RecommendUserBox>
                ))}

            </RecommendBox>
        </>
    )
}

export default Recommend