import React from 'react'
import ComponentC from './ComponentC';
// import { AppData } from './models/AppData';


// interface IProps{
//     appData : AppData
// };

export const ComponentB : React.FC = () => {
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body bg-warning">
                        <p>Component B</p>
                        {/* <ComponentC appData = {props.appData}/> */}
                        <ComponentC/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ComponentB;