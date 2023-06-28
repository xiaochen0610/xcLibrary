import React from "react";
import './replyBar.css';


export default function ReplyBar({ messageNumber, likeNumber }) {
    let width = window.innerWidth - 150
    return (
        <div className="replyBar">
            <div className="input">
                <input type="text" placeholder='都让让，我要回帖了'
                    style={{ width: width }}
                ></input>
            </div>
            <div className="replyBar-right">
                <div className="replyBar-message">
                    <div className="img"></div>
                    <div className="number">no{messageNumber}</div>
                </div>
                <div className="replyBar-like">
                    <div className="img"></div>
                    <div className="number">no{likeNumber}</div>
                </div>

            </div>

        </div>
    );
};