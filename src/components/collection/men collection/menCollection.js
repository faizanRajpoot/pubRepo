import axios from "axios";
import React, { useEffect, useState } from "react";
// import Mens1 from "../../../img/mens/mens1.jpg"
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

        <div className="w-full mt-16 grid gap-x-10 grid-cols-4 gap-y-16">

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/1_3_400x666.jpg?v=1594641797" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
              CL Jersey Vamp-TB0303</p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/11")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/s-l1600_5_400x666.jpg?v=1594640279" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            CL So Kate 120 Sequined-TB0025</p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/12")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/f2cbc595-7910-4371-825b-f63db24cf197_400x666.jpg?v=1594967547" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            CL Interior 85-TB0041
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/13")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/20_2_400x666.jpg?v=1594646709" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            Jimmy Choo Dayton Leather Bootie-TB0350
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/14")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/bf0e3de8-cdcc-4543-ab3e-ee2f8b98e6e1_400x666.jpg?v=1594715224" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            NK Penelope Embellished Pumps-TB1002
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/15")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/19_4_400x666.jpg?v=1594704798" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            Gianvito Rossi Plexi Pump-TB0511
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/16")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/WhatsAppImage2021-05-18at5.38.15PM_1_400x666.jpg?v=1668081193" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            Gina Dakota In Baby Pink Chic - TB0723
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/17")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/wsefweff_400x666.jpg?v=1616741534" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            D&G Platforms - TB2000
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/18")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/jonatina5_400x666.jpg?v=1612612300" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            CL Jonatina - TB0226
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/19")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>

          <div className="shadow-lg px-3">
            <img src="https://cdn.shopify.com/s/files/1/0291/9222/4802/products/ljl_400x666.jpg?v=1616741388" alt="img" className="w-full h-64 px-5 " />
            <p className="text-xs mt-2">Tods</p>
            <p className="text-sm mt-3">
            D&G Classic Velvet Mules - TB0993
            </p>
            <p className=" text-sm mt-3">Rs.129,950.00</p>
            <button onClick={() => history.push("/entry/20")} className="my-2 flex justify-center items-center w-full bg-gray-200 h-10 font-semibold">View Details</button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default MenCollection;
