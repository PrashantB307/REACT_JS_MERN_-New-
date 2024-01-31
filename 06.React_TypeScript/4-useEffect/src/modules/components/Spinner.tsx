import React from 'react'
import spinner from "../components/assets/spinner.gif"


export const Spinner : React.FC = () => {
  return (
    <>
    <div className='spinner'>
        <img src={spinner} alt="" />
    </div>
    </>
  )
}

export default Spinner