import React from 'react';
import ReactHtmlParser from "react-html-parser";
import { useState } from 'react';
import moment from 'moment';
import './App.css';
import request from './request'
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

    })
    .catch((err) => {
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
        />
        <Commend />
      </div>
      <ReplyBar />
    </div >
  );
};


