import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen flex justify-center" style={{backgroundColor:color}}>
        <div className="bg-black text-white flex flex-wrap  h-16 align-middle  rounded-lg justify-evenly mx-auto w-[80%] mt-10">
          <div className="bg-red-500 align-middle flex flex-wrap h-10 my-auto pt-2 px-6 rounded-md font-semibold mr-5 cursor-pointer" onClick={() => setColor("red")}>Red</div>
          <div className="align-middle bg-yellow-500 flex flex-wrap h-10 my-auto pt-2 px-6 rounded-md font-semibold mr-5 cursor-pointer" onClick={() => setColor("yellow")}>Yellow</div>
          <div className="bg-green-500 align-middle flex flex-wrap h-10 my-auto pt-2 px-6 rounded-md font-semibold mr-5 cursor-pointer" onClick={() => setColor("green")}>Green</div>
          <div className="bg-blue-500 align-middle flex flex-wrap h-10 my-auto pt-2 px-6 rounded-md font-semibold mr-5 cursor-pointer" onClick={() => setColor("blue")}>Blue</div>
          <div className="bg-purple-500 align-middle flex flex-wrap h-10 my-auto pt-2 px-6 rounded-md font-semibold mr-5 cursor-pointer" onClick={() => setColor("purple")}>Purple</div>

        </div>
      </div>
    </>
  )
}

export default App
