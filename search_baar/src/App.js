import { useState } from "react";
import videobg from "./videos/vid1.mp4"
import {FaSearch} from "react-icons/fa"
var data = require("./MOCK_DATA.json");

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  

  return (
    <div className="h-screen position-fixed bg-black">
      <div className="md:w-[800px] mx-auto">
      <h1 className="  font-bold text-white text-9xl  font-serif  ">SEARCHBAR</h1>
      <h2 className="  font-bold  relative mt-[2rem] right-[-14rem] text-white text-2xl  font-serif  ">SEARCH EMPLOYEE NAME:</h2>
      <video name="abc1" className="h-[4rem] w-screen object-cover fixed   left-[0rem] mt-[10rem] rounded-[25rem]" src={videobg}  muted autoPlay loop/>
      <div className=" relative sm:w-[350px] mx-auto">
      <input type="search" placeholder='Search...' value={value} onChange={onChange} className=" placeholder:text-gray placeholder:text-2xl   text-2xl h-[4rem] w-[22rem]  bg-white  mt-[10rem] right-[0rem] rounded-full cursor-pointer pl-5 focus:w-[-10rem] focus:cursor-text focus:pl-8 focus:pr-4 "></input>
      <FaSearch className="h-5 w-5  absolute mt-[-2.5rem] right-[3rem] cursor-pointer " onClick={() => onSearch(value)} />
        </div>
        


     
        <div className="h-[10rem] w-[10rem] relative sm:w-[300px] mx-auto mt-[0rem] left-[0rem] bg-transparent  cursor-pointer focus:bg-white text-2xl ">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="bg-white border-2"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
