import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./helpers/Random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSumbmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App  ">
      <header className="bg-[url('/bgh.png')] ">
        <div className="flex justify-center p-10">
          <img
            className="sm:absolute sm: w-[885px] sm:h-[885px] sm:top-[-400px] sm:left-[
277px]"
            src="/Ellipse.png"
            alt=""
          />
          <img className="absolute" src="/nh.png" alt="" />
        </div>

        <form className="flex flex-col justify-center" onSubmit={handleSumbmit}>
          <div className="flex px-2 py-2 justify-center items-center">
            <input type="text" 
              className=" w-[433px] h-[60px] bg-[#4d000000] border-2 border-[#8EFF8B] outline-none text-white
                
                sm:my-[150px] sm:relative"
              id="locationId"
              placeholder="Type a location Id..."
              
              />
            
            <button className="  w-[103px] h-[60px] bg-[#8EFF8B] border-2 text-white sm:relative">
              <i className="bx bx-search"></i>
            </button>
          </div>
          <h2 className=" my-10  h-[26px]  font-['Fira Code'] font-medium text-[20px] text-center text-[#8EFF8B] leading-[26px] ">
            Welcome to the crazy universe!
          </h2>
        </form>
      </header>
      <div className=" bg-[url('/bgm.png')] sm:flex sm: flex-col sm:">
        <Location location={location} />
        <ResidentList location={location} />
      </div>
    </div>
  );
}

export default App;
