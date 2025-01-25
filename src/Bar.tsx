import React from "react";
import { Client } from "./App";

const Bar = ({
    clients,
    setTargetNickname 
}: {
    clients: Client[], 
    setTargetNickname: (nickname: string) => void;
}) => {
    return (
        <div className="flex flex-col md:ml-3">
            <div className="flex justify-center mt-12 mb-10 md:mr-3">
                <img 
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" 
                    alt="" 
                    className="w-8 rounded-full mr-2"
                />
                <span className="invisible md:visible w-0 md:w-auto font-bold">
                    Chats
                </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
                {clients.map((client) => (
                    <button onClick={() => setTargetNickname(client.nickname)}>
                        <div className="flex mb-3">
                            <img 
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" 
                                alt=""  
                                className="w-8 h-8 rounded-full mr-1.5"
                            />
                            <span className="text-sm leading-8 invisible md:visible w-0 md:w-auto">
                                {client.nickname}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Bar;