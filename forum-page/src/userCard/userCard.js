import React from "react";
import { useState } from "react";
import UserMessage from "./userMessage/userMessage";
import UserCardNavigator from "./userCardNavigator/userCardNavigator";
import requestUsercard from "./requestUserCard";

export default function userCard() {
    const [sface, setSface] = useState("头像");
    const [nick, setNick] = useState("昵称");
    const [area, setArea] = useState("地区");
    const [follow_num, setFollow_num] = useState("");
    const [fans_num, setFans_num] = useState("");
    const [group_num, setGroup_num] = useState("");
    const [praise_num, setPraise_num] = useState("");
    const [digest_thread_num, setDigest_thread_num] = useState("");

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
        })
        .catch((err) => {
            console.log(err);
        })
    return (
        <div className="userCard">
            <UserCardNavigator />
            <UserMessage
                sface={sface}
                nick={nick}
                area={area}
                follow_num={follow_num}
                fans_num={fans_num}
                group_num={group_num}
                praise_num={praise_num}
                digest_thread_num={digest_thread_num}
            />
        </div>
    )
}