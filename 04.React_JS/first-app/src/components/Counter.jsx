import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const clickIncre = () => {
        setCount(count + 1);
    };

    const clickDecre = () => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    const clickIncreBy = (val) => {
        setCount(count + val);
    };

    const clickDecreBy = (val) => {
        setCount(count - val > 0 ? count - val : 0);
    };


  return (
    <>

    <div className="container mt-3">
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <p className='display-2'>{count}</p>
                        <button className='btn btn-success me-2' onClick={clickIncre}>Increment</button>
                        <button className='btn btn-danger' onClick={clickDecre}>Decrement</button><br /> <br />
                        <button className='btn btn-success me-2' onClick={() => clickIncreBy(5)}>Increment By 5</button>
                        <button className='btn btn-danger' onClick={() => clickDecreBy(5)}>Decrement By 5</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter