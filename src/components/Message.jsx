import React, { useState } from "react";

const Message = () => {
  // const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [incr, setIncr] = useState(0);

  //given user_list
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const randomIndex = Math.floor(Math.random() * 5);
  // let randomIndex = Math.floor(Date.now() % user_list.length);

  // find first name from list
  const userName = user_list[randomIndex];

  // get first letter from the userName
  const getName = userName.charAt(0);

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, items];
    });
    setItems("");
  }

  const incrementCount = () => {
    // Update state with incremented value
    setIncr(incr + 1);
  };

  //get current time
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="message">
      <div className="messageInfo">
        <div class="message-circle">{getName}</div>
      </div>

      <div>
        <div className="nameTime">
          <div className="name">{userName}</div>
          <div className="time">{showTime}</div>
        </div>
        <div className="messageContent">
          <p>Hi there!</p>

          {/* <p>{props.sms}</p> */}
          {/* <p>{message.text}</p> */}
          <span className="thumb" onClick={incrementCount}>
            👍{incr}{" "}
          </span>

          <div>
            {items.map((todoItem) => (
              <li>{todoItem}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
