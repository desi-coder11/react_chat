import React, { memo, useMemo, useState } from "react";

const Message = ({ inputValue }) => {
  const [incr, setIncr] = useState(0);

  const [items, setItems] = useState(["Alan", "Bob", "Carol", "Dean", "Elin"]);

  const randomIndex = useMemo(
    () => Math.floor(Math.random() * items.length),
    [items]
  );
  const randomItem = items[randomIndex];

  const getName = randomItem.charAt(0);

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
          {/* <div className="name">{userName}</div> */}

          <div className="name">{randomItem}</div>

          <div className="time">{showTime}</div>
        </div>
        <div className="messageContent">
          <p>{inputValue}</p>

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

export default memo(Message);
