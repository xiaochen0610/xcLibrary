import React from "react";
import Skeleton from "./skeleton/skeleton";
import './commend.css'

export default function Commend(prop) {
    // if (!prop) {
    return <div className="commend">
        <div className="commend-title">
            <div>你的专属推荐</div>
        </div>
        <Skeleton />
    </div>
    // } else {
    //     return <div className="commend">
    //         <div className="commend-title">
    //             <div>你的专属推荐</div>
    //         </div>
    //         <div>
    //             123
    //         </div>
    //     </div>
    // }
}