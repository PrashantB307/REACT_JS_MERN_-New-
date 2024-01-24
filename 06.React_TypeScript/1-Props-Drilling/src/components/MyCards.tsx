import React from 'react'

interface IProps {
    heading : string;
}

const MyCards : React.FC<IProps> = (props) => {
  return (
    <>
    <div className="card">
        <div className="card_body">
          <h2 className="heading">{props.heading}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique alias harum! Suscipit, esse sapiente quibusdam consequatur
            error iure doloribus.
          </p>
        </div>
      </div>
    </>
  )
}

export default MyCards