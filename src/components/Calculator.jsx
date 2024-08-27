import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // State to hold the current input
  const [result, setResult] = useState(""); // State to hold the live result

  // Function to handle input from the buttons or keyboard
  const handleInput = (value) => {
    const updatedInput = input + value;
    setInput(updatedInput);

    // Evaluate the expression live as user types
    try {
      const evaluatedResult = eval(updatedInput); // Use eval carefully in production environments
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  // Function to handle changes from keyboard input
  const handleChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);

    // Evaluate the expression live as user types
    try {
      const evaluatedResult = eval(newInput); // Use eval carefully in production environments
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center ">
      <div className="bg-stone-300 p-3 rounded-xl w-full">
        <input
          className="bg-transparent w-full text-lg"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter values"
        />
        <div className="result"> {result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2 w-full">
        <button
          className="p-2 bg-blue-200 hover:bg-blue-300 rounded-lg"
          onClick={() => handleInput("1")}
        >
          1
        </button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("+")}>+</button>

        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")}>-</button>

        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("*")}>*</button>

        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleInput("/")}>/</button>
        <button onClick={() => handleInput(".")}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
