import React from "react";
import "./userCardNavigator.css";
import { Link } from 'react-router-dom';


const userCardNavigator = () => {
    return (
        <div className="userCardNavigator">
            <div className="userCardNavigator-left">
                <Link className='userCardNavigator-left-img' to='/'>
                    <img src={"/image/back.png"} alt='' />
                </Link>
            </div>
            <div className="userCardNavigator-right">
                <img src={'/image/more.png'} alt='' />
            </div>
        </div>
    )
}

export default userCardNavigator;