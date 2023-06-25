import React from 'react';
import ReactHtmlParser from "react-html-parser";
import { useState } from 'react';
import moment from 'moment';
import './App.css';
import request from '../request'
import requestCommend from '../request-commend';
import Navigator from './navigator/navigator';
import User from './user/user';
import Page from './page/page';
import ReplyBar from './replyBar/replyBar';
import Commend from './commend/commend';

export default function App() {
  const [title, setTitle] = useState("帖子");
  const [sface, setSface] = useState(null);
  const [nick, setNick] = useState("");
  const [num_view, setNum_view] = useState(null);
  const [dateline, setDateline] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [goodNumber, setGoodNumber] = useState(null);
  const [icon, setIcon] = useState(null);
  const [num_user_subscribe, setNum_user_subscribe] = useState(null);
  const [num_reply_yesterday, setNum_reply_yesterday] = useState(null);
  const [subjectCommend1, setSubjectCommend1] = useState(null);
  const [str1, setStr1] = useState(null);
  const [pic1, setPic1] = useState(null);
  const [num_viewCommend1, setNum_viewCommend1] = useState(null);
  const [subjectCommend2, setSubjectCommend2] = useState(null);
  const [str2, setStr2] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [num_viewCommend2, setNum_viewCommend2] = useState(null);
  const [subjectCommend3, setSubjectCommend3] = useState(null);
  const [str3, setStr3] = useState(null);
  const [pic3, setPic3] = useState(null);
  const [num_viewCommend3, setNum_viewCommend3] = useState(null);



  request
    .then((data) => {
      setTitle(data.config.quan_info.title);
      setSface(data.thread.user.sface);
      setNick(data.thread.user.nick);
      setNum_view(data.thread.num_view);
      setDateline(moment(data.thread.dateline).format(`MM[-]DD`));
      setSubject(data.thread.subject);
      setMessage(ReactHtmlParser(data.thread.message));
      setGoodNumber(data.thread.num_good);
      setIcon(data.config.quan_info.icon);
      setNum_user_subscribe(data.config.quan_info.num_user_subscribe);
      setNum_reply_yesterday(data.config.quan_info.num_reply_yesterday);

    })
    .catch((err) => {
      console.log(err);
    })

  requestCommend.then((data) => {
    setSubjectCommend1(data[0].thread.subject);
    setStr1(data[0].thread.summary.str);
    setPic1(data[0].thread.summary.video.pic);
    setNum_viewCommend1(data[0].thread.num_view);
    setSubjectCommend2(data[1].thread.subject);
    setStr2(data[1].thread.summary.str);
    setPic2(data[1].thread.summary.video.pic);
    setNum_viewCommend2(data[1].thread.num_view);
    setSubjectCommend3(data[2].thread.subject);
    setStr3(data[2].thread.summary.str);
    setPic3(data[2].thread.summary.video.pic);
    setNum_viewCommend3(data[2].thread.num_view);
  }).catch((err) => {
    console.log(err);
  })

  return (
    <div className="app">
      <Navigator title={title} />
      <div className='app-page'>
        <User
          sface={sface}
          nick={nick}
          num_view={num_view}
          dateline={dateline} />
        <Page
          subject={subject}
          message={message}
          goodNumber={goodNumber}
          icon={icon}
          title={title}
          num_user_subscribe={num_user_subscribe}
          num_reply_yesterday={num_reply_yesterday}
        />
        <Commend
          subject1={subjectCommend1}
          str1={str1}
          pic1={pic1}
          num_view1={num_viewCommend1}
          subject2={subjectCommend2}
          str2={str2}
          pic2={pic2}
          num_view2={num_viewCommend2}
          subject3={subjectCommend3}
          str3={str3}
          pic3={pic3}
          num_view3={num_viewCommend3}
        />

      </div>
      <ReplyBar />
    </div >
  );
};


