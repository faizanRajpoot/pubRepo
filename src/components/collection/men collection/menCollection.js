import axios from "axios";
import React, { useEffect, useState } from "react";
import Mens1 from "../../../img/mens/mens1.jpg"
import { useHistory } from "react-router-dom";


function MenCollection() {

  const [data, setData] = useState();
  const history = useHistory();
  // console.log(data);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/shoes")
      .then((res) => setData(res?.data?.result));
  }, [])

  return (
    <div className="w-full pb-24">

      <div className="w-full h-40 bg-[#F6F6F6] flex flex-col justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home /{" "}
          <span className="text-red-600 uppercase"> Mens Collection </span>
        </h1>
      </div>

      <div className="w-full px-16 py-5">
        <div className="w-full h-20  flex border-[1px] border-gray-200 border-x-0 ">
          <div className="w-8/12 ">
            <div className="text-sm px-2 h-full flex items-center">
              <i class="fa-sharp fa-solid fa-list"></i>
              <i class="fa-sharp fa-solid fa-grip-vertical ml-3  "></i>
            </div>
          </div>
          <div className="w-2/12  text-sm flex justify-between items-center h-full px-2">
            <p>10</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="w-2/12  flex justify-between items-center text-sm px-2">
            <p>Date , New To Old</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        <div className="w-full h-14  mt-10 flex justify-between">
          <label className="flex flex-col w-[49%] text-sm justify-around leading-10">
            Browse By Color:
            <input
              type="text"
              className="h-8 border-gray-500 border-[1px] rounded-sm outline-none px-3 focus:border-blue-300 focus:border-[1px]"
              placeholder="All"
            />
          </label>
          <label className="flex flex-col w-[49%] text-sm justify-around leading-10">
            Browse By Size:
            <input
              type="text"
              className="h-8 border-gray-500 border-[1px] rounded-sm outline-none px-3 focus:border-blue-300 focus:border-[1px]"
              placeholder="All"
            />
          </label>
        </div>

        <div className="w-full mt-16 flex justify-between gap-y-16 flex-wrap">
         
          {(data?.map((v) => {
        
            return (

              <div className="shadow-lg px-3 w-[280px]">
                <img src={v?.shoes_img} alt="img" className="w-full h-64 px-5 " />
                <p className="text-xs mt-2">{v.brand_name}</p>
                <p className="text-sm mt-3">
                  {v.shoes_name}</p>
                <p className=" text-sm mt-3">Rs.129,950.00</p>
                <button onClick={() => history.push(`/entry/${v.id}`)} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
              </div>
            )

          }))}

        </div>
      </div>
    </div>
  );
}

export default MenCollection;
