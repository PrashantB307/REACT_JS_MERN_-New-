import React from "react";
import "./App.css";
// import WishMessage from "./components/Use-State/WishMessage";
import GreetMessage from "./components/Use-Reducer/GreetMessage";



const App: React.FC = () => {

  return (
    <>
    {/* <WishMessage/> */}

    <GreetMessage/>      
    </>
  );
};

export default App;
