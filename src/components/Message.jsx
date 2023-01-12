import React, { useEffect, useRef, useState } from "react";

const Message = ({ inputValue }) => {
  // const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [incr, setIncr] = useState(0);

  const [inputText, setInputText] = useState("");

  



  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  //given user_list
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const randomIndex = Math.floor(Math.random() * 5);
  // let randomIndex = Math.floor(Date.now() % user_list.length);

  // find first name from list
  const userName = user_list[randomIndex];

  // get first letter from the userName
  const getName = userName.charAt(0);

  

  const incrementCount = () => {
    // Update state with incremented value
    setIncr(incr + 1);
  };

  //get current time
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="message" >
      <div className="messageInfo">
        <div class="message-circle">{getName}</div>
      </div>

      <div>
        <div className="nameTime">
          <div className="name">{userName}</div>
          <div className="time">{showTime}</div>
        </div>
        <div className="messageContent">
          <p>{inputValue}</p>

          {/* <span>
          {items.map(todoItem => (
            <p>{todoItem}</p>
          ))}
          </span> */}

          {/* <p>{props.sms}</p> */}
          <div>
          <span className="thumb" onClick={incrementCount}>
         
          👍
          </span>
          {incr > 0 && <span>{incr}</span>}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Message;
