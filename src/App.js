import { useState } from "react";
import { BackgroundAnimate } from "./components/BackgroundAnimate/BackgroundAnimate";
import InputShortener from "./components/InputShortener/InputShortener";
import LinkResult from "./components/LinkResult/LinkResult";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
};

export default App;
