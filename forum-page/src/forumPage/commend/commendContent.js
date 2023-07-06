import React from "react";
import './commendContent.css'

export default function CommendContent({ subject, str, pic, num_view }) {

    return <div className="commend-content0">
        <div className="commend-content-title">
            <div className="commend-img">荐</div>
            <div className="t5">
                {subject}
            </div>
        </div>
        <div className="commend-content">
            <div className="commend-content-left">
                <div className="str">
                    {str}
                </div>
                <div className="commend-content-view">
                    {num_view}浏览
                </div>
            </div>
            <img src={pic} alt=""></img>
        </div>
    </div>
}