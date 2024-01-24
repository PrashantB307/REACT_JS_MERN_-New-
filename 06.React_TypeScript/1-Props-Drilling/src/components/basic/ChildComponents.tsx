import React, { useState } from 'react';

interface IProps{
    text : string;
    updateChildText : (msg : string) => void;
}

export const ChildComponents: React.FC<IProps> = (props) => {

    const [msg, setMsg] = useState<string>("I am from Child");

    const clickButton = () => {
        props.updateChildText(msg);
        
    };
    
  return (
   <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body bg-warning">
                        <p>{msg}</p>
                        <p>From Parent : {props.text}</p>

                        <button className='btn btn-success' onClick={clickButton}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default ChildComponents;