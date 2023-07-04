import React from "react";
import "./userCardPost.css"
import Skeleton from "./skeleton/skeleton";
import UserCardPostContent from "./userCardPostContent/userCardPostContent";

export default function UserCardPost({ nick }) {
    return (
        <div className="userCardPost">
            <UserCardPostContent
                nick={nick} />
            <Skeleton />
        </div>
    )
}