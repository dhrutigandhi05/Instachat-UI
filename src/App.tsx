import React, { useEffect, useRef, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Join from './join';
import { WSConnector } from './WSConnector';
// import WSConnector from './WSConnector';
import Convo from './convo';
import Bar from './Bar';
// import { MessageItem } from './MessageItem';

export type Client = {
  connectionId: string;
  nickname: string;
};

export type Message = {
  messageId: string, //v4 creates a random unique hash value
  createdAt: number,
  nicknameToNickname: number,
  message: string,
  sender: string,
};

const WS_URL = "wss://hnr10uqox5.execute-api.us-east-1.amazonaws.com/dev";
const wsConnector = new WSConnector();

function App() {
  const [nickname, setNickname] = useState(window.localStorage.getItem("nickname") || "");
  const [clients, setClients] = useState<Client[]>([]);
  const [targetNicknameValue, setTargetNicknameValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([])
  
  useEffect(() => {window.localStorage.setItem("nickname", nickname)});
  const wsConnectortRef = useRef(wsConnector);

  if (nickname === "") {
    return <Join setNickname={setNickname}/>;
  }

  const url = `${WS_URL}$nickname=${nickname}`;
  const ws = wsConnectortRef.current.getConnection(url);

  ws.onopen = () => {
    ws.send(JSON.stringify({
      action: "getClients",
    })
  )};

  ws.onmessage = (e) => {
    const message = JSON.parse(e.data) as {
      type: string;
      value: unknown;
    };

    console.log(message);

    if (message.type === 'clients') {
      setClients((message.value as {clients: Client[]}).clients);
    }

    if (message.type === 'messages') {
      setMessages((message.value as {messages: Message[]}).messages);
    }
  };

  const setTargetNickname = (nickname: string) => {
    ws.send(JSON.stringify({
      action: "getMessage",
      targetNickname: nickname,
      limit: 1000,
    }));

    setTargetNicknameValue(nickname);
  };
  
  return (
    <div className="flex">
      <div className="flex-none w-15 md:w-40 border-r-2">
        <Bar clients={clients} setTargetNickname={setTargetNickname}/>
      </div>
      <div className="flex-auto">
        <Convo messages={messages}/>
      </div> 
    </div>
  );
}

export default App;
