import React from "react";
import './page.css'
import Share from "./share/share";

export default function Page({ subject, message, goodNumber, icon, title, num_user_subscribe, num_reply_yesterday }) {
    return (
        <div className="page">
            <span>{subject}</span>
            <div className="message">
                <span>
                    {message}
                </span>
            </div>
            <Share
                goodNumber={goodNumber}
                icon={icon}
                title={title}
                num_user_subscribe={num_user_subscribe}
                num_reply_yesterday={num_reply_yesterday} />
        </div>
    )
}