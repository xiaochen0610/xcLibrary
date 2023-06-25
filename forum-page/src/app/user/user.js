import React from "react";
import "./user.css";
// import { Router } from "express";
// import { Link } from "react-router-dom";



export default function User({ sface, nick, num_view, dateline }) {
    return (
        <div className="user">

            <img src={sface} alt="头像"></img>
            <div className="user0">
                <div className="user1">
                    <span className="nick">
                        {nick}
                    </span>
                    <span className="identity">
                        楼主
                    </span>
                </div>
                <div className="user2">
                    <span>1楼</span>
                    <span>  {dateline} </span>
                    <span> {num_view}浏览 </span>
                </div>
            </div>


            <div className="button">
                <input type="submit" value="关注"></input>

            </div>
        </div>
    )
};