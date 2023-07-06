import React, { useEffect } from "react";
import "./userCardNavigator.css";
import { Link } from 'react-router-dom';


const userCardNavigator = () => {

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
    });
    function scrollHandler() {
        const scrollHeight = window.screenY
        console.log(scrollHeight)
    }
    scrollHandler()


    return (
        <div className="userCardNavigator">
            <div className="userCardNavigator-left">
                <Link className='userCardNavigator-left-img' to='/forumPage'>
                    <img src={"/image/back-white.png"} alt='' />
                </Link>
            </div>
            <div className="userCardNavigator-right">
                <img src={'/image/more-white.png'} alt='' />
            </div>
        </div>
    )
}

export default userCardNavigator;