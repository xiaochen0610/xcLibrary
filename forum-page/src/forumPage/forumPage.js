import React, { useEffect } from 'react';

import ReactHtmlParser from "react-html-parser";
import { useState } from 'react';
import moment from 'moment';
import './forumPage.css';
import request from './request'
import requestCommend from './request-commend';
import Navigator from './navigator/navigator';
import User from './user/user';
import Page from './page/page';
import ReplyBar from './replyBar/replyBar';
import Commend from './commend/commend';

export default function forumPage() {
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
  const [commends, setCommends] = useState(null);

  useEffect(() => {
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
      let timeout = setTimeout(() => {
        setCommends(data);
        clearTimeout(timeout);
      }, 1000);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

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
          commends={commends}
        />

      </div>
      <ReplyBar />
    </div >
  );
};


