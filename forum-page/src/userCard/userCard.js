import React from "react";
import { useState } from "react";
import "./userCard.css";

import requestUsercard from "./requestUserCard";
import requestUsercardPost from "./requestUserCardPost";

import UserMessage from "./userMessage/userMessage";
import UserCardNavigator from "./userCardNavigator/userCardNavigator";
import UserCardPost from "./userCardPost/userCardPost";

export default function userCard() {
    const [nick, setNick] = useState("昵称");
    const [area, setArea] = useState("地区");
    const [follow_num, setFollow_num] = useState("");
    const [fans_num, setFans_num] = useState("");
    const [group_num, setGroup_num] = useState("");
    const [praise_num, setPraise_num] = useState("");
    const [digest_thread_num, setDigest_thread_num] = useState("");
    const [bface, setBface] = useState("");
    const [userCardPosts, setUserCardPosts] = useState(null);

    requestUsercard
        .then((data) => {
            setNick(data.nick);
            setArea(data.area);
            setFollow_num(data.follow_num);
            setFans_num(data.fans_num);
            setGroup_num(data.group_num);
            setPraise_num(data.praise_num);
            setDigest_thread_num(data.digest_thread_num);
            setBface(data.bface);
        })
        .catch((err) => {
            console.log(err);
        })

    requestUsercardPost.then((data) => {
        let timeout = setTimeout(() => {
            setUserCardPosts(data);
            clearTimeout(timeout);
        }, 1000);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <div className="userCard">
            <UserCardNavigator />
            <img src={'/image/penguin.gif'} alt=''></img>
            <div className="userCardPage">
                <UserMessage
                    bface={bface}
                    nick={nick}
                    area={area}
                    follow_num={follow_num}
                    fans_num={fans_num}
                    group_num={group_num}
                    praise_num={praise_num}
                    digest_thread_num={digest_thread_num}
                />
                <UserCardPost
                    userCardPosts={userCardPosts}
                    nick={nick}
                />
            </div>

        </div>
    )
}