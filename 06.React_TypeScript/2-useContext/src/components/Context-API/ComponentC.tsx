import React, { useContext } from 'react'
import { AppDataContext, UpdateChildcontext } from '../../App';
// import { AppData } from './models/AppData';


// interface IProps{
//     appData : AppData
// };


export const ComponentC : React.FC = () => {

    const theAppData = useContext(AppDataContext);

    const updateChildContext = useContext(UpdateChildcontext);
    
    const clickeSend = () => {
       updateChildContext.updateChild("Hello I am From Component C");
    };

  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body bg-danger">
                        <p>Component C</p>
                        {/* <pre>{JSON.stringify(props.appData)}</pre> */}

                        {/* Provide the Context Data */}
                        <pre>{JSON.stringify(theAppData)}</pre>
                        <button className='btn btn-success' onClick={clickeSend}>Send</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ComponentC;