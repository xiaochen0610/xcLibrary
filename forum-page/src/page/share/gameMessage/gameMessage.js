import React from "react";
import './gameMessage.css'


export default function GameMessage({ icon, title }) {
    return (
        <div className="gameMessage">
            <img src={icon} alt=""></img>
            <div className="gameMessage-left">
                <div className="gameMessage-left1">
                    {title}
                </div>
                <div className="gameMessage-left2">
                    <div>
                        <span className="num">{ }no</span>
                        <span>成员</span>
                    </div>
                    <div>
                        <span className="num">{ }no</span>
                        <span>昨日更新</span>
                    </div>
                </div>


            </div>
            <div className="gameMessage-right">
                <input type="submit" value="加入"></input>
            </div>

        </div>
    )
}