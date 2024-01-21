import React from "react";

const MyCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card_body">
          <h1 className="heading1">Ram Ram Bhai Sare Aane.</h1>
          <h2 className="heading2">{props.value}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique alias harum! Suscipit, esse sapiente quibusdam consequatur
            error iure doloribus.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyCard;
