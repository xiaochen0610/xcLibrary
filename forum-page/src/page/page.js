import React from "react";
import './page.css'
import Share from "./share/share";

export default function Page({ subject, message, goodNumber, icon, title }) {
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
                title={title} />
        </div>
    )
}