import React, { useState } from "react";
import {TourServices} from "../services/TourServices"

const TourCardsOptimes = () => {
  const [tours, setTours] = useState(TourServices.getAllTours());

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {tours.map((tour, idx) => {
            return (
              <div className="col-sm-3" key={idx}>
                <div className="card shadow-lg">
                  <img src={tour.imgUrl} alt="" className="" height={200} />
                  <div className="card-body">
                    <p className="h3">{tour.name}</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia vitae accusamus perferendis aperiam repudiandae
                      odit omnis delectus. Voluptas, pariatur at?
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TourCardsOptimes;
