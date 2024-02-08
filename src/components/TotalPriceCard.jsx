import React from 'react';
import { MdArrowBack } from "react-icons/md";
const TotalPriceCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[1080px]    ">
     
   
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex justify-between">
      <p className="text-gray-700 font-semibold">Total</p>
        <p className="text-red-800 font-semibold">100</p> {/* Example shipping cost */}
      </div>
      <hr className="my-4 border-t " />
      <div className="flex justify-between">
        <button type="button">
        <MdArrowBack />
        </button>
        <button type="button" className='button-theme bg-[#424343] text-slate-200'>
            confirm
        </button>
         {/* Example total including shipping */}
      </div>
    </div>
  );
};

export default TotalPriceCard;
