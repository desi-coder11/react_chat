import React, {  useEffect,  useRef } from "react";
import Message from "./Message";

const Messages = ({ messages }) => {

  
 
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }, [messages]);



  return (
    <div className="messages" ref={messageRef}>

      {messages.map((message, index) => (
        <Message  key={index} inputValue={message} />
      ))}
    

    </div>
  );
};

export default  (Messages);
