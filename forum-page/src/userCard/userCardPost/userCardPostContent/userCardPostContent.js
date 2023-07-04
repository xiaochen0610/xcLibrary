import React from "react";
import "./userCardPostContent.css"

export default function UserCardPostContent({ nick, subject, str, images, num_good, num_view, title, num_reply }) {
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
                        <span>{num_view}浏览</span>
                    </div>
                </div>
            </div>
            <div className="userCardPostUserContent1">
                <div className="userCardPostUserContentTitle1">
                    {subject}
                </div>
                <div className="userCardPostUserContentSummary1">
                    {str}
                </div>
                <img className="userCardPostUserContentImg1" src={images} alt=''></img>

                <div className="game1">
                    <img className="gameImg1" src={"/image/penguin.gif"} alt='' />
                    <div className="gameTitle1">
                        {title}
                    </div>
                    <img className="gameMore" src={"/image/back.png"} alt='' />
                </div>
            </div>
            <div className="userCardPostMessage1">                <div>
                <img src={"/image/message.png"} alt='' />
                {num_reply}
            </div>
                <div>
                    <img src={"/image/good.png"} alt='' />
                    {num_good}
                </div>

            </div>
        </div>


    )
}