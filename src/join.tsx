import React, { useState } from "react";

const Join = ({setNickname}: {setNickname:(nickname: string) => void}) => {
    const [nicknameValue, setNicknameValue] = useState("");
    const [error, setError] = useState("");

    return(
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-center">Welcome to InstaChat</h2>
                </div>
                <div>
                    <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Username" onChange={(e) => setNicknameValue(e.target.value)} value={nicknameValue}/>
                    {error !== "" ? <span className="text-red-600 font-semibold text-sm" >{error}</span> : ""}
                </div>
                <div>
                    <button onClick={() => nicknameValue === "" ? setError("A username must be entered") : setNickname(nicknameValue)} className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Join</button>
                </div>
            </div>
        </section>
    );
};

export default Join;