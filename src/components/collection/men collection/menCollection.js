import React from "react";

function menCollection() {
  return (
    <div className="w-full ">
      <div className="w-full h-40 bg-slate-100 flex flex-col justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600 uppercase"> Mens Collection </span>
        </h1>
      </div>

      <div className="w-full h-screen bg-green-400 px-16 ">
            <div className="w-full h-20 bg-red-100 flex ">
                <div className="w-8/12 bg-red-300"></div>
                <div className="w-2/12 bg-red-500"></div>
                <div className="w-2/12 bg-red-800"></div>
            </div>
      </div>
    </div>
  );
}

export default menCollection;
