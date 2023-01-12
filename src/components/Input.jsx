import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { AddReactionOutlined } from "@mui/icons-material";
import { Mention } from "react-mentions";

const Input = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  const [mentionValue, setMentionValue] = useState("");

  const [items, setItems] = useState([]);

  const handleChangenew = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitnew = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const handleAddMention = (mention) => {
    setMentionValue(mentionValue + mention);
  };

  const handleEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    // setText(text + emoji.emoji);
  };

  const onEmojiClick = (event, emojiObject) => {
    setItems(prevInput => inputText + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleChangeMention = (event) => {
    setValue(event.target.value);
  };

  const handleTextInputBlur = (e) => {
    setShowPicker(false);
  };

  return (
    <form className="input" onSubmit={handleSubmitnew}>
      
      <input
        onChange={handleChangenew}
        type="text"
        value={inputValue}
        placeholder="Type something."
        onBlur={handleTextInputBlur}
      />
            

      <button onClick={addItem}></button>

      <div className="item_content">
        <div>
          {items.map((todoItem) => (
            <div>{todoItem}</div>
          ))}
        </div>
      </div>

      <Mention
        value={mentionValue}
        onAdd={handleAddMention}
        trigger={"@"}
        data={[
          { id: 1, display: "Alan" },
          { id: 2, display: "Bob" },
        ]}
      />

      <button onClick={() => setShowPicker(!showPicker)}>
        <AddReactionOutlined />
      </button>
      {showPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </form>
  );
};

export default Input;
