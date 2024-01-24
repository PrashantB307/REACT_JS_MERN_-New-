import React, { useState } from "react";
import ChildComponents from "./ChildComponents";

export const ParentComponents: React.FC = () => {

  const [msg, setMsg] = useState<string>("I am from Parent");
  const [cText, setChildText] = useState<string>("");

  const updateChildText = (msg : string) : void => {
    setChildText(msg);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body bg-primary text-white">
                <p>{msg}</p>
                <p>From Child : {cText} </p>
                <ChildComponents text={msg} updateChildText = {updateChildText}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentComponents;
