import React from "react";
import Skeleton from "./skeleton/skeleton";
import './commend.css'
import CommendContent from "./commendContent";

export default function Commend({ subject1, str1, pic1, num_view1, subject2, str2, pic2, num_view2, subject3, str3, pic3, num_view3 }) {
    if (subject1) {
        return <div className="commend">
            <div className="commend-title">
                <div>你的专属推荐</div>
            </div>
            <CommendContent
                subject={subject1}
                str={str1}
                pic={pic1}
                num_view={num_view1} />
            <CommendContent
                subject={subject2}
                str={str2}
                pic={pic2}
                num_view={num_view2} />
            <CommendContent
                subject={subject3}
                str={str3}
                pic={pic3}
                num_view={num_view3} />
        </div>
    } else {
        return <div className="commend">
            <div className="commend-title">
                <div>你的专属推荐</div>
            </div>
            <Skeleton />
        </div>
    }
}