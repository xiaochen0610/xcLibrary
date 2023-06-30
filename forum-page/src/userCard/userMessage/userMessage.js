import React from "react";
import './userMessage.css'

export default function UserMessage({ bface, sface, nick, area, follow_num, fans_num, group_num, praise_num, digest_thread_num }) {

    return (
        <div className="userMessage"
            style={{ backgroundImage: `url(${bface})` }}>
            <div className="userMessage-area-sface-botton" >
                <div className="userMessage-area-sface">
                    <img src={sface} alt=''></img>
                </div>
                <div className="userMessage-area-botton">
                    关注
                </div>
            </div>
            <div className="userMessage-area">
                <div className="userMessage-area-userName">
                    {nick}
                </div>
                <div className="userMessage-area-area">
                    IP属地:{area}
                </div>
                <div className="userMessage-area-attention">
                    <span className="num">
                        {follow_num}
                    </span>
                    关注
                    <span>|</span>
                    <span className="num">
                        {fans_num}
                    </span>
                    粉丝
                    <span>|</span>
                    <span className="num">
                        {group_num}
                    </span>
                    论坛
                </div>
                <div className="userMessage-area-honor">
                    <div className="userMessage-area-honor-1">
                        荣誉墙
                    </div>
                    <div className="userMessage-area-honor-2">
                        被赞
                        <span>{praise_num}</span>
                        <span className="point">·</span>
                        精华帖
                        <span>{digest_thread_num}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}