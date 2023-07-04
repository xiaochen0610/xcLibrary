import React from "react";
import "./userCardPost.css"
import Skeleton from "./skeleton/skeleton";
import UserCardPostContent from "./userCardPostContent/userCardPostContent";

export default function UserCardPost({ nick, subject, str, images, num_good, num_view, title, num_reply }) {
    return (
        <div className="userCardPost">
            <UserCardPostContent
                nick={nick}
                subject={subject}
                str={str}
                images={images}
                num_good={num_good}
                num_view={num_view}
                title={title}
                num_reply={num_reply}


            />
            <Skeleton />
        </div>
    )
}