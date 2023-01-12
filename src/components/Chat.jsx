import { PeopleAltOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(messages);
  }, [messages]);

  const handleSubmit = (value) => {
    setMessages([...messages, value]);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="chat-heading">
          Introductions
          <p className="chat-title">
            This channel is made for Company Wide Chatter
          </p>
        </span>

        <div className="peopleIcon">
          <div>3|100</div>
          <PeopleAltOutlined />
        </div>
      </div>

      <div className="line" />

      <Messages messages={messages} />
      <Input onSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
