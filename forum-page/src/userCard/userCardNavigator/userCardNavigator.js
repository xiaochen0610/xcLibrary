import React from "react"
import "./userCardNavigator.css"

const Navigator = ({ title }) => {

    return (
        <div className="userCardNavigator">
            <div className="userCardNavigator-left">
                <img src={"/image/back.png"} alt='' />
            </div>
            <div className="userCardNavigator-right">
                <img src={'/image/more.png'} alt='' />
            </div>
        </div>
    )
}

export default Navigator;