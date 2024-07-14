import React, { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Studdata from "./Studdata";
import Addstudent from "./Addstudent";

const studentlist = [
  {
    name: "haney",
    age: 21,
  },
  {
    name: "raj",
    age: 20,
  },
  {
    name: "harshiv",
    age: 22,
  },
];

function addstudent(n, a) {
  studentlist.push({ name: n, age: a });
  console.log(studentlist);
}

const resobj = [
  {
    resname: 'kfc',
    rating: '5 star',
    rating1: 3,
  },
  {
    resname: 'MCD',
    rating: '4 star',
    rating1: 5,
  },
  {
    resname: 'DOMINO',
    rating: '3 star',
    rating1: 5,
  },
  {
    resname: 'DOMINO',
    rating: '3 star',
    rating1: 3,
  },
  {
    resname: 'DOMINO',
    rating: '3 star',
    rating1: 3,
  },
  {
    resname: 'DOMINO',
    rating: '3 star',
    rating1: 3,
  },
];

const Body = () => {
  const [searchText, setText] = useState('');
  const [listOfRestaurants, setListOfRestaurants] = useState(resobj);

  useEffect(() => {
    // Uncomment and implement fetchdata if necessary
    // fetchdata();
  }, []);

  // const fetchdata = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newdata = resobj.filter((res) =>
              res.resname.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(newdata);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            const newdata1 = resobj.filter((e) => e.rating1 >= 4);
            setListOfRestaurants(newdata1);
          }}
        >
          Best Hotel
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((ress, id) => (
          <Rescard key={id} resData={ress} />
        ))}
      </div>

      <div className="studcontainer">
        {studentlist.map((data, index) => (
          <Studdata key={index} stud={data} />
        ))}
      </div>

      <Addstudent adduser={addstudent} />
    </div>
  );
};

export default Body;
