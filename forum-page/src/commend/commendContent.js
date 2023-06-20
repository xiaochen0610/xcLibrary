import React from "react";

export default function CommendContent({ subject, str, pic, num_view }) {
    return <div className="commend-content0">
        <div className="commend-content-title">
            <div className="commend-img">荐</div>
            <div className="commend-content-title-content">
                {subject}
            </div>
        </div>
        <div className="commend-content">
            <div>
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