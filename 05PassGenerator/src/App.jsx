import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [character, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (numAllowed) str += "~!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, character, setPassword]);
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, character, passwordGenerator])
  return (
    <>
      <div className="flex flex-col bg-gray-500 w-[80%] mx-auto mt-16 rounded-lg justify-center">
        <h1 className="text-center text-4xl  text-white">Password Generator</h1>
        <div className="flex align-middle justify-center py-4">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="password"
            className="text-xl outline-none rounded w-[75%] h-[50px] pl-2"
            ref={passwordRef}
          />
          <label onClick={copyPasswordToClipboard()} className=" w-[20%] bg-blue-600 rounded text-2xl text-white  flex justify-center cursor-pointer items-center">
            Copy
          </label>
        </div>

        <div className="flex items-center justify-center gap-10 py-3 text-white text-xl font-bold">
          <div>
            <input
              type="range"
              min={6}
              max={80}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="px-1">Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label className="px-1">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label className="px-1">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
