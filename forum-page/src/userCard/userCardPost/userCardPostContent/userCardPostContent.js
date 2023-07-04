import React from "react";
import "./userCardPostContent.css"

export default function UserCardPostContent({ nick }) {
    return (

        <div className="userCardPost1">
            <div className="userCardPostUser1">
                <img src={'/image/penguin.gif'} alt=''></img>
                <div className="userCardPostUserMessage1">
                    <div className="nick">
                        {nick}
                    </div>
                    <div className="postAbout">
                        <span>昨天{ }</span>
                        <span>{ }浏览</span>
                    </div>
                </div>
            </div>
            <div className="userCardPostUserContent1">
                <div className="userCardPostUserContentTitle1">
                    标题
                </div>
                <div className="userCardPostUserContentSummary1">
                    总呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜我呜呜呜呜呜呜呜呜呜呜呜呜总呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜我呜呜呜呜呜呜呜呜呜呜呜呜总呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜我呜呜呜呜呜呜呜呜呜呜呜呜
                </div>
                <img className="userCardPostUserContentImg1" src={'/image/penguin.gif'} alt=''></img>

                <div className="game1">
                    <img className="gameImg1" src={"/image/penguin.gif"} alt='' />
                    <div className="gameTitle1">
                        游戏名
                        { }
                    </div>
                    <img className="gameMore" src={"/image/back.png"} alt='' />
                </div>
            </div>
            <div className="userCardPostMessage1">
                <div>
                    <img src={"/image/good.png"} alt='' />
                    111{ }
                </div>
                <div>
                    <img src={"/image/message.png"} alt='' />
                    111{ }
                </div>
            </div>
        </div>


    )
}