import React from "react";
import "./Main.css";
import {
  bulb_icon,
  code_icon,
  compass_icon,
  message_icon,
  user_icon,
} from "../../assets";

const Main = () => {
  return (
    <div className="main flex-1 min-h-screen relative pb-[15vh]">
      <div className="nav flex items-center justify-between text-[22px] px-5 py-3 text-[#585858]">
        <p>Gemini</p>
        <img
          src={user_icon}
          alt="user_icon"
          className="w-[47px] rounded-full"
        />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="greet my-10 mx-0 text-6xl text-[#c4c7c5] font-[500] px-6 py-4">
          <p className="mb-3">
            <span>Hello, Dev.</span>
          </p>
          <p className="text-5xl" >How Can I Help You Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={message_icon} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
