import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

function App() {
  const [curval, newval] = useState("");

  const buttonClicked = (butName) => {
    console.log(butName);

    if (butName === "c") {
      newval("");
    } else if (butName === "=") {
      newval(eval(curval));
    } else {
      const tempVal = curval + butName;
      newval(tempVal);
    }
  };

  return (
    <div className="outer">
      <Input curval={curval}></Input>
      <Buttons buttonClicked={buttonClicked}></Buttons>
    </div>
  );
}

export default App;
