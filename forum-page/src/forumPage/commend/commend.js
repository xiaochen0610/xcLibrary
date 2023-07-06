import React from "react";
import Skeleton from "./skeleton/skeleton";
import './commend.css'
import CommendContent from "./commendContent";

export default function Commend({ commends }) {
    const commendsContent = commends == null ? null : commends.map((comm) => {
        return <CommendContent
            subject={comm.thread.subject}
            str={comm.thread.summary.str}
            pic={comm.thread.summary.pic}
            num_view={comm.thread.num_view} />
    });

    if (commends != null) {
        return <div className="commend">
            <div className="commend-title">
                <div>你的专属推荐</div>
            </div>
            {commendsContent}
        </div>
    } else {
        return <div className="commend">
            <div className="commend-title">
                <div>你的专属推荐</div>
            </div>
            <Skeleton />
        </div>
    }
}