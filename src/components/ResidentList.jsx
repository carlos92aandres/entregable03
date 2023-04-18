import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const RESIDENTS_PER_PAGE = 20 
  
  
  const arrayPages=[]


  const quantityPage = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE
  )
  for(let i = 1; i <= quantityPage; i ++){
    arrayPages.push(i)
  }

  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
  const endCut = currentPage + RESIDENTS_PER_PAGE
  
  

  const residents = location?.residents;

  useEffect(()=> {
    setCurrentPage(1)

  },[location])

  return (
    <>
    <section>
      {residents?.slice(startCut, endCut).map((resident) => (
        <ResidentCard key={resident} resident={resident}/>
      ))}
    </section>
    <ul className="flex gap-4 justify-center py-4 text-white">
      {arrayPages?.map((page)=> <li onClick={()=> setCurrentPage(page)} className={`p-3 cursor-pointer rounded md ${page=== currentPage && "bg-green-700 text-white font-bold"}`} key={page}> {page} </li>)}

    </ul>
    </>

  );
};

export default ResidentList;
