import React from "react";
import Skeleton from "./skeleton/skeleton";

export default function Commend() {
    return (
        <div className="commend">
            <div className="commend-title">
                你的专属推荐
            </div>
            <Skeleton />
        </div>
    )
}