import React, { useEffect, useRef, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Join from './join';
import WSConnector from './WSConnector';
import Convo from './convo';
import Bar from './Bar';

type Client = {
  connectionId: string;
  nickname: string;
};

const wsConnector = new WSConnector();

function App() {
  const [nickname, setNickname] = useState<string>(window.localStorage.getItem("nickname") || "");
  useEffect(() => {window.localStorage.setItem("nickname", nickname)});

  const wsConnectortRef = useRef(wsConnector);

  if (nickname === "") {
    return <Join setNickname={setNickname}/>
  }

  const url = `wss://hnr10uqox5.execute-api.us-east-1.amazonaws.com/dev?$nickname=${nickname}`;
  const ws = wsConnectortRef.current.getConnection(url);
  ws.onopen = () => {
    ws.send(JSON.stringify({
      action: "getClients",
    })
  )};

  ws.onmessage = (e) => {
    const message = JSON.parse(e.data) as {
      type: string
      value: {
        clients: Client[]
      };
    };
  };
  
  return (
    <div className="flex">
      <div className="flex-none w-15 md:w-40 border-r-2">
        <Bar />
      </div>
      <div className="flex-auto">
        <Convo />
      </div> 
    </div>
  );
}

export default App;
