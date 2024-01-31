import React from 'react'

interface IProps {
    msg : string;
}

export const ErroeMessage: React.FC<IProps> = (props) =>{
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="txt-success text-center">{props.msg}</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default ErroeMessage;