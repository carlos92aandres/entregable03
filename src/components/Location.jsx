import React from 'react'

const Location = ({location}) => {
    
  return (
   
     
     
     <section className='mx-2'>
         
         <ul className='flex flex-col gap-2'>
         <li className='flex gap-4'>
             <span className="text-[#938686] font-normal">Galaxy: </span>
             <span className="font-semibold text-[#FBFBFB] ">{location?.name}</span>
             </li>
             <li className='flex gap-4'>
             <span className="text-[#938686] font-normal">Type: </span>
             <span className="font-semibold text-[#FBFBFB] "> {location?.type}</span>
             </li>
             <li className='flex gap-4'> 
             <span className="text-[#938686] font-normal">Dimension:</span>
             <span className="font-semibold text-[#FBFBFB] "> {location?.dimension}</span>

             </li>
             <li className='flex gap-4'>
             <span className="text-[#938686] font-normal"> Population: </span>
             <span className="font-semibold text-[#FBFBFB] "> {location?.residents.length}</span>
               </li>
         </ul>
         
      
       
     </section>

  )
}

export default Location