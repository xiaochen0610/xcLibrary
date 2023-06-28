import React from "react";
import './userMessage.css'

export default function UserMessage() {
    return (
        <div className="userMessage">
            <div className="userMessage-area-sface-botton">
                <div className="userMessage-area-sface">
                    ?
                </div>
                <div className="userMessage-area-botton">
                    关注
                </div>
            </div>
            <div className="userMessage-area">
                <div className="userMessage-area-userName">
                    名字?
                </div>
                <div className="userMessage-area-area">
                    IP属地:?
                </div>
                <div className="userMessage-area-attention">
                    <span className="num">
                        ?
                    </span>
                    关注
                    <span>|</span>
                    <span className="num">
                        ?
                    </span>
                    粉丝
                    <span>|</span>
                    <span className="num">
                        ?
                    </span>
                    论坛
                </div>
                <div className="userMessage-area-honor">
                    <div className="userMessage-area-honor-1">
                        荣誉墙
                    </div>
                    <div className="userMessage-area-honor-2">
                        被赞
                        <span>?</span>
                        <span className="point">·</span>
                        被赞
                        <span>?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}