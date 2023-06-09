import React from "react"
import "./navigator.css"

const Navigator = ({ title }) => {

    return (
        <div className="navigator">
            <div className="navigator-left">

                <img src={"/image/back.png"} alt='' />
                <div>{title}</div>
            </div>
            <div className="navigator-right">
                <span>进论坛</span>
                <img src={'/image/share.png'} alt='' />
            </div>
        </div>
    )
}

export default Navigator;