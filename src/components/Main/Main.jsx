import React, { useContext } from "react";
import "./Main.css";
import {
  bulb_icon,
  code_icon,
  compass_icon,
  gallery_icon,
  gemini_icon,
  message_icon,
  mic_icon,
  send_icon,
  user_icon,
} from "../../assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  

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
        {!showResult ? (
          <>
            <div className="greet my-10 mx-0 text-6xl text-[#c4c7c5] font-[500] px-6 py-4">
              <p className="mb-3">
                <span>Hello, Dev.</span>
              </p>
              <p className="text-5xl">How Can I Help You Today?</p>
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
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title capitalize">
                <img src={user_icon} alt="user_icon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={gemini_icon} alt="gemini_icon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-[30px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-3">
              <img src={gallery_icon} alt="" />
              <img src={mic_icon} alt="" />
              <img src={send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
