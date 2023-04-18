import axios from "axios";
import React, { useEffect, useState } from "react";


const residentStatus = { 
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({ resident }) => {
    const [residentInfo, setResidentInfo] = useState();
    

    
  
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" sm:grid sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
    <article className=" my-[30px] border-2 border-[#8EFF8B]  sm:w-[437px] sm: mx-auto ">
      <div className="relative h-max-[407px]">
        <img className=" w-full  sm:w-full " src={residentInfo?.image} alt="" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#020A02]/80 h-[42px] w-[180px] text-whote p-1 px-2 flex gap-5 items-center justify-center rounded-sm border-2 border-[#8EFF8B]">
          <div className={`w-4 h-4 ${residentStatus[residentInfo?.status]} rounded-full`}></div>
          <span> {residentInfo?.status} </span>
        </div>
      </div>
      <div className="">
      
      <section className="px-3  text-['Fira Code'] gap-2 bottom-2">
        <h3 className=" text-xl font-extrabold leading-10 text-white text-['Fira Code'] text-center" > {residentInfo?.name} </h3>
        <hr />
        <ul className="py-5 flex flex-col gap-2 ">
          <li className=" flex gap-[100px]">
            <span className="text-[#938686] font-normal">Species:</span>
            <span className="font-semibold text-[#FBFBFB] "> {residentInfo?.species} </span>
          </li>
          <li className=" flex gap-[100px]">
            <span className="text-[#938686] font-normal">Origin:</span>
            <span className="font-semibold text-[#FBFBFB] "> {residentInfo?.origin.name} </span>
          </li>
          <li className=" flex gap-[100px]">
            <span className="text-[#938686] font-normal">Times appear:</span>
            <span className="font-semibold text-[#FBFBFB]"> {residentInfo?.episode.length} </span>
          </li>
        </ul>
      </section>
      </div>
    </article>
    </div>
    
  );
};

export default ResidentCard;
