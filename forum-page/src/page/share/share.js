import React from "react";
import './share.css'
import GameMessage from "./gameMessage/gameMessage";


export default function Share({ goodNumber, icon, title }) {
    return (
        <div className="share">
            <div className="goodSface">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="goodNumber">
                <div></div>
                <span> {goodNumber} 人已赞</span>
                <div></div>
            </div>
            <div className="shareButton">
                <input type="submit" value="分享"></input>
                <input type="submit" value="点赞"></input>
            </div>
            <GameMessage
                icon={icon}
                title={title} />
        </div>
    )
}