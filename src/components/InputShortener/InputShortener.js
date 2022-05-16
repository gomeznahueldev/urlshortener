import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./InputShortener.css";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div className="inputShortener">
        <Input type="text" placeholder="Paste a link..." value={value} onChange={(e) => setValue(e.target.value)} className="inputShortener__input" />
        <Button handleClick={handleClick} textButton="Shorten" />
      </div>
    </div>
  );
};

export default InputShortener;
