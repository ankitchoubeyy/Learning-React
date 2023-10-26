import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h2 className="text-white font-bold font-serif text-6xl w-full text-center p-10">
      Our Members
    </h2>
    <div className="flex gap-10 flex-wrap my-4 mx-5 items-center justify-center ">
      <Card
        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
        name="Ankit"
        phn="+912345678"
        email="achoubey@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1694564717876-7436bdf6a236?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
        name="Kashish"
        phn="+912345678"
        email="kashish@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
        name="Neha"
        phn="+912345678"
        email="neha@gmail.com"
      />
      <Card
        img="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
        name="Rohan"
        phn="+9123654678"
        email="rohan@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2VzfGVufDB8fDB8fHww"
        name="Anup"
        phn="+912345678"
        email="Anup@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2VzfGVufDB8fDB8fHww"
        name="Ashish"
        phn="+912345678"
        email="Ashish@gmail.com"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEx5FMobRH5bUsc7RxssWff1vJl1vXBkdxQ&usqp=CAU"
        name="Dwane"
        phn="+912345678"
        email="Dwane@gmail.com"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr1i25jqVHRFv8eBDwljZqXTSBVO60GRsiQ&usqp=CAU"
        name="Allen"
        phn="+12345678"
        email="allen@gmail.com"
      />
    </div>
  </React.StrictMode>
);
