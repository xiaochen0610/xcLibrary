import React from "react";
import "./skeleton.css"

export default function Skeleton() {
    return (
        <div className="skeleton">
            <div className="skeleton-message">
                <div></div>
                <div></div>
                <div className="half"></div>
            </div>
            <div className="skeleton-message">
                <div></div>
                <div></div>
                <div className="half"></div>
            </div>
        </div>
    )
}