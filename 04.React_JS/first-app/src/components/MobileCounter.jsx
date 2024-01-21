import React, { useState } from 'react'

const MobileCounter = () => {

    const [mobile, setMobile] = useState( {
        brand : "Apple",
        price : 40000,
        color : "Silver"
    });

    const clickIncre = () => {
        setMobile( {
            ...mobile,
            price : 50000,
            color : "Black"
        });
    }

    const clickDecre = () => {
        setMobile( {
            ...mobile,
            price : 35000,
            color : "White"
        });
    }



  return (
    <>

    <div className="container mt-3">
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <pre>{JSON.stringify(mobile)}</pre>
                        <p className='display-2'></p>
                        
                        <button className='btn btn-success me-2' onClick={clickIncre} >Increment</button>
                        <button className='btn btn-danger' onClick={clickDecre}>Decrement</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MobileCounter;