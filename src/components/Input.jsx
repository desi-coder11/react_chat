import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { AddReactionOutlined } from "@mui/icons-material";
import { Mention } from "react-mentions";

const Input = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  // const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState("");


  const [mentionValue, setMentionValue] = useState("");

  // const [inputText, setInputText] = useState("");
  ///////////////////////////////////////////////
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const handleChangenew = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitnew = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');

  };

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  ////////////////////////////////////////////

  const handleAddMention = (mention) => {
    setMentionValue(mentionValue + mention);
  };
  /////////////bbbbbbbbbbbb////////////
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setInputText(event.target.value);
  //   setInputText("");
  // };
  ///////////////////bbbbbbbbbbbbb///////////

  const handleEmojiClick = (emoji, emojiObject) => {
    console.log(emojiObject);
    setText(text + emoji.emoji);

    // setInputText(inputText + emoji.emoji);
  };

  // function handleChange() {
  //   setInputText(prevItems => {
  //     return [...prevItems, inputText];
  //   });
  //   setInputText("");
  // }

  const handleChangeMention = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValue((prevValue) => {
      return [...prevValue, value];
    });
    setValue("");
  };

  //   const handleText = (event) =>{
  //     event.preventDefault();

  //     setInputText(prevItems => {
  //       return [...prevItems, inputText];
  //     });
  //     setInputText("");

  // }

  const handleTextInputBlur = (e) => {
    setShowPicker(false);
  };

  return (
    // <form className='input' >
    //   <input
    //     type="text"
    //     placeholder="Type something..."
    //     // onChange={handleChange}
    //     onChange={(e) => setInputText(e.target.value)}

    //     value={inputText}
    //   />

    //   <div className="send">

    //     <button onClick={addItem}>
    //       {/* send */}
    //     <AddReactionOutlined/>
    //     </button>

    //   </div>
    // </form>
    // onSubmit={handleSubmit}

    <form className="input"  onSubmit={handleSubmitnew}>
      <input
        onChange={handleChangenew}
        type="text"
        value={inputValue}
        placeholder="Type something."
        //  value={props.text}
        ////////////
        // onChange={(event) => {
        //   event.preventDefault();

        //   setInputText(event.target.value);
        // }}
        /////////////////
        // onChange={(e) => setInputText(e.target.value)}
        // value={inputText}
        // onChange={handleText}
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
          { id: 1, display: "John Doe" },
          { id: 2, display: "Jane Doe" },
        ]}
      />

      {/* <button onClick={setValue}>
        <AddReactionOutlined/>
        </button> */}
      {/* <button type='submit' className='send' onClick={setValue} >
        <AddReactionOutlined/>

        </button> */}

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
