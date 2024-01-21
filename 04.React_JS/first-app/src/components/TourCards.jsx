import React, { useState } from "react";

const TourCards = () => {
  const [tours, setTours] = useState([
    {
      sno: "01",
      name: "Paris",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK0hWoRRUHO-mJZKMEOXBSD11CkFbcNjcLw",
    },
    {
      sno: "02",
      name: "Singapor",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1maxJOjl7jp-NGHendTwcSExSIj5qvmoWw&usqp=CAU",
    },
    {
      sno: "03",
      name: "London",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AgoEHVe2etl1uJs3RsdpPBm_c3jwjQT4Jw&usqp=CAU",
    },
    {
      sno: "04",
      name: "India",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT-6hxcrVbpUcSa9cFBCw5S_WFWkrEjH_aw&usqp=CAU",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card shadow-lg">
              <img src={tours[0].imgUrl} alt="" className="" height={200} />
              <div className="card-body">
                <p className="h3">{tours[0].name}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia vitae accusamus perferendis aperiam repudiandae odit
                  omnis delectus. Voluptas, pariatur at?
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card shadow-lg">
              <img src={tours[1].imgUrl} alt="" className="" height={200} />
              <div className="card-body">
                <p className="h3">{tours[1].name}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia vitae accusamus perferendis aperiam repudiandae odit
                  omnis delectus. Voluptas, pariatur at?
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card shadow-lg">
              <img src={tours[2].imgUrl} alt="" className="" height={200} />
              <div className="card-body">
                <p className="h3">{tours[2].name}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia vitae accusamus perferendis aperiam repudiandae odit
                  omnis delectus. Voluptas, pariatur at?
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card shadow-lg">
              <img src={tours[3].imgUrl} alt="" className="" height={200} />
              <div className="card-body">
                <p className="h3">{tours[3].name}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia vitae accusamus perferendis aperiam repudiandae odit
                  omnis delectus. Voluptas, pariatur at?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCards;
