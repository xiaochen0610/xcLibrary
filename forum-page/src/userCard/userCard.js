import React from "react";
import { useState } from "react";
import "./userCard.css";

import requestUsercard from "./requestUserCard";
import requestUsercardPost from "./requestUserCardPost";

import UserMessage from "./userMessage/userMessage";
import UserCardNavigator from "./userCardNavigator/userCardNavigator";
import UserCardPost from "./userCardPost/userCardPost";

export default function userCard() {
    const [sface, setSface] = useState("头像");
    const [nick, setNick] = useState("昵称");
    const [area, setArea] = useState("地区");
    const [follow_num, setFollow_num] = useState("");
    const [fans_num, setFans_num] = useState("");
    const [group_num, setGroup_num] = useState("");
    const [praise_num, setPraise_num] = useState("");
    const [digest_thread_num, setDigest_thread_num] = useState("");
    const [bface, setBface] = useState("");
    const [subject, setSubject] = useState("");
    const [str, setStr] = useState("");
    const [images, setImages] = useState("");
    const [num_good, setNum_good] = useState("");
    const [num_view, setNum_view] = useState("");
    const [title, setTitle] = useState("");
    const [num_reply, setNum_reply] = useState("");


    requestUsercard
        .then((data) => {
            setSface(data.sface);
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
        setSubject(data[0].subject)
        setStr(data[0].summary.str)
        setImages(data[0].summary.images)
        setNum_good(data[0].num_good)
        setNum_view(data[0].num_view)
        setTitle(data[0].quan_info.title)
        setNum_reply(data[0].num_reply)

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
                    nick={nick}
                    subject={subject}
                    str={str}
                    images={images}
                    num_good={num_good}
                    num_view={num_view}
                    title={title}
                    num_reply={num_reply}



                />
            </div>

        </div>
    )
}