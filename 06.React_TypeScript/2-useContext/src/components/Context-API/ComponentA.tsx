import React from 'react'
import ComponentB from './ComponentB'
// import { AppData } from './models/AppData'

// interface IProps{
//     appData : AppData
// };

export const ComponentA : React.FC= () => {

    

  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body bg-info">
                        <p>Component A</p>
                        {/* <ComponentB appData = {props.appData}/> */}
                        <ComponentB/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ComponentA