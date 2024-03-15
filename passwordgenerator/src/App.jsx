import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const generatepassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatepassword();
  }, [length, numberAllowed, charAllowed]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };
  return (
    <div id="mainsec">
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword}>copy</button>
      </div>
      <div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label>numbers</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label>character</label>
      </div>
    </div>
  );
}

export default App;
