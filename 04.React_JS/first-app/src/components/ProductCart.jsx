import React, { useState } from "react";
import { ProductService } from "../services/ProductService";

const ProductCart = () => {
  const [watches, setWatches] = useState(ProductService.getAllProducts());

   const clickIncre = (productId) => {
    const theProducts = watches.map( watch => {
        if(watch.id === productId){
            return {
                ...watch,
                qty : watch.qty + 1
            } 
        }
        return watch;
    });

    setWatches(theProducts);
   };

   const clickDecre = (productId) => {
    const theProducts = watches.map( watch => {
        if(watch.id === productId){
            return {
                ...watch,
                qty : watch.qty - 1 > 0 ? watch.qty - 1 : 1
            } 
        }
        return watch;
    });

    setWatches(theProducts);
   };

   const calculateGrandTotal = () => {
    let total = 0;
    for(let watch of watches){
      total += (watch.price * watch.qty);
    }

    return total;
   };

   const clickDeleteProd = (productId) => {
    setWatches(watches.filter(watch => watch.id !== productId));
   };


  return ( 
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Watch Cart</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo consequatur odio consectetur ullam necessitatibus minus iste inventore tempore excepturi reiciendis, omnis expedita non rerum, aut labore, nulla delectus iure.
            </p>
          </div>
        </div>
      </div>
      {
        watches.length > 0 ? <>
        <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped table-hover text-center shadow-lg">
              <thead className="bg-light text-dark">
                <tr>
                  <th>S No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {watches.map((watch, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{watch.id}</td>
                      <td>
                        <img src={watch.imgUrl} alt="" width={60} height={60} />
                      </td>
                      <td>{watch.name}</td>
                      <td>&#8377; {watch.price.toFixed(2)}</td>
                      <td>
                        <i onClick={() => clickDecre(watch.id)} className="bi bi-dash-circle-fill me-3 text-success" />
                        {watch.qty}
                        <i onClick={() => clickIncre(watch.id)} className="bi bi-plus-circle-fill ms-3 text-success" />
                      </td>
                      <td>&#8377; {watch.price * watch.qty.toFixed(2)}</td>
                      <td>
                        <button onClick={() => clickDeleteProd(watch.id)}
                        className="btn btn-danger">
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3}></td>
                  <td>Grand Total : </td>
                  <td>&#8377; {calculateGrandTotal().toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </> : <>
         <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="h4 text-danger"> =================== Ye Babua Sb Khatm Ho Gael =================== </p>
            </div>
          </div>
         </div>
        
        </>
      }
    </>
  );
};

export default ProductCart;
