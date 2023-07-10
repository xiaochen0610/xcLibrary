import React from "react";
import "./userCardPost.css"
import Skeleton from "./skeleton/skeleton";
import UserCardPostContent from "./userCardPostContent/userCardPostContent";

export default function UserCardPost({ nick, userCardPosts }) {
    const cardPost = userCardPosts == null ? null : userCardPosts.map((post) => {
        return <UserCardPostContent
            nick={nick}
            subject={post.subject}
            str={post.summary.str}
            images={post.summary.images}
            num_good={post.num_good}
            num_view={post.num_view}
            title={post.quan_info.title}
            num_reply={post.num_reply} />;
    });

    if (userCardPosts != null) {
        return <div className="userCardPost">
            {cardPost}
        </div>
    } else {
        return <Skeleton />
    }
}