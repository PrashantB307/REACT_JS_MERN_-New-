import React, { useState } from 'react'

interface IProps{
    pText : string;
    setCMessage : any;
}

export const ChildCard: React.FC<IProps> = (props) =>{

    const [cText, setCtext] = useState<string>("");

    const updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCtext(event.target.value);
        props.setCMessage(event.target.value);
    };

  return (
    <>
    {/* <pre>{cText}</pre> */}
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-info">
                        <form>
                            <input
                            value={cText}
                            onChange={e => updateInput(e)}
                            type="text" className='form-control' placeholder='Child Text'/>
                        </form>
                    </div>
                    <div className="card-body bg-info">
                        <p>{props.pText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChildCard