import React, { useEffect, useState } from 'react'

export const Counter:React.FC = () => {

    console.log("omponenet is Created");

    const [count, setCount] = useState<number>(0);

    const clickIncre = (): void => {
        setCount(count + 1);
    };

    const clickDecre = (): void => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    useEffect( () => {
        console.log("Componenet is Fully Rendered");
    }, []);

    useEffect( () => {
        console.log("Componenet is Rendered for count variable");
    }, [count]);


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
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter;