import React from "react";


const Card = (props) => {
    return ( 
        <>
        <div className="card mt-3 shadow-lg">
            <img src={props.imgSrc} alt="" className="img-fluid"/>
            <div className="card-body">
                <p className="h3">{props.heading}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis cum tempora eaque mollitia nostrum eligendi? Expedita quia ad quaerat.</p>
            </div>
        </div>
        </>
    )
}

export default Card;