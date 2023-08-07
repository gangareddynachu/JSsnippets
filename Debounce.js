// Debounce Function

A debounced function is a functionn whose execution is deleayed by t milliseconds and whose execution is cancelled 
  if it is called again within that window of time.The debounced function should also receieve th passed paramaters.


Debouncing is a method that limits the rate at which a function gets called.It works by delaying the execution of a funtion
until a ceratin amount of time has passes without any additional function calls.If another function call happens within this time
the timer resets and the function execution is delayed again.

Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:
  1) Handling user input events like keypresses, mouse movements, or button clicks
  2) Handling expensive computations or network requests that don't need to be performed on every function call.


import "./styles.css";
import { useState, useCallback } from "react";

export default function App() {
  const [normal, setNormal] = useState("");
  const [debounce, setDebounce] = useState("");

  const debounceFunc = function (fn, t = 1000) {
    let delay;
    return function (...args) {
      clearTimeout(delay);
      delay = setTimeout(() => fn(...args), t);
    };
  };

  const debounceRequest = useCallback(
    (value) => handleChangeDebounce(value),
    []
  );

  const handleChange = (e) => {
    setNormal(e.target.value);
    debounceRequest(e.target.value);
  };

  const handleChangeDebounce = debounceFunc((val) => {
    setDebounce(val);
  }, 1000);

  return (
    <div>
      <center>
        <p>
          Type something in the input field to see the difference between normal
          and debounce
        </p>
        <p>Normal: The value will be updated on every keystroke</p>
        <p>
          Debounce: The value will be updated after 1 second of no keystroke
        </p>
        <input type="text" onChange={(e) => handleChange(e)} />
      </center>
      <h2 style={{ wordBreak: "break-all" }}>Normal: {normal}</h2>
      <h2 style={{ wordBreak: "break-all" }}>Debounce: {debounce} </h2>
    </div>
  );
}
