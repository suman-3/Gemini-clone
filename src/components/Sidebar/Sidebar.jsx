import React, { useContext, useState } from "react";
import "./Sidebar.css";
import {
  history_icon,
  menu_icon,
  message_icon,
  plus_icon,
  question_icon,
  setting_icon,
} from "../../assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar min-h-screen flex flex-col justify-between bg-[#f0f4f9] py-6 px-4">
      <div className="top">
        <img
          src={menu_icon}
          alt="menuicon"
          className="menu block ml-[10px] cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          onClick={() => newChat()}
          className="new-chat mt-10 inline-flex items-center gap-2.5 px-2.5 py-2 bg-[#e6eaf1] rounded-full text-[15px] cursor-pointer text-gray-500"
        >
          <img src={plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-5 mb-4">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry ">
                  <img src={message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
