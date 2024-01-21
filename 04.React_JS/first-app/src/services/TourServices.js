export class TourServices {
  static tours = [
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
  ];

  static getAllTours() {
    return this.tours;
  }
}
