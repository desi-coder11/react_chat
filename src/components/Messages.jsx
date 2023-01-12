import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Input from "./Input";

const Messages = ({ messages }) => {

  // const [inputValue, setInputValue] = useState('');
  // const handleSubmit = (value) => {
  //   setInputValue(value);
  // };
  
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }, [messages]);



  


  return (
    <div className="messages" ref={messageRef}>
      


      {messages.map((message, index) => (
        <Message key={index} inputValue={message} />
      ))}
    

    </div>
  );
};

export default Messages;
