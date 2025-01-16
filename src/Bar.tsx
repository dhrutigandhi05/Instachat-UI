import React from "react";

const Bar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center mt-12 mb-10">
                <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-8 rounded-full mr-2"/>
                <span className="font-bold">Chats</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex mb-5">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 mr-2 rounded-full"/>
                    <span className="text-sm leading-9">Friend 1</span>
                </div>
                <div className="flex mb-5">
                    <img src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 mr-2 rounded-full"/>
                    <span className="text-sm leading-9">Friend 2</span>
                </div>
            </div>
        </div>
    );
};

export default Bar;