import React from "react";
import "./skeleton.css"

export default function Skeleton() {
    return (
        <div className="skeleton">
            <div></div>
            <div></div>
            <div className="half"></div>
        </div>
    )
}