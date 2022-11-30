import React, { useEffect, useState } from "react";
import Mens1 from "../../img/mens/mens1.jpg";
import axios from "axios";

function AddToCart() {
  const [cartData, setCartData] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/checkOut")
      .then((res) => setCartData(res?.data?.result));
  }, [])

  return (
    <div className="w-full ">
      <div className="w-full h-40 bg-[#F6F6F6] flex justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600"> Your Shopping Cart </span>
        </h1>
      </div>
      <div className="w-full px-20 py-16 lg:px-10">
        <h1 className="uppercase text-4xl font-medium tracking-wide md:text-2xl sm:text-xl ">
          Shopping Cart
        </h1>
        <div className="w-full  h-full border-[1px] border-gray-300 rounded-sm mt-10 md:mt-5 sm:mt-5 ">
          <div className="w-full h-12 flex">
            <div className=" w-1/5 h-full flex justify-center items-center text-xs sm:text-[10px]  xs:text-[8px] text-gray-500 border-[1px] border-gray-300 border-t-0 border-l-0">
              Image
            </div>
            <div className=" w-1/4 h-full flex justify-center items-center text-xs sm:text-[10px]  xs:text-[8px] text-gray-500 border-[1px] border-gray-300 border-t-0 border-l-0">
              Product Name
            </div>
            <div className=" w-1/4 h-full flex justify-center items-center text-xs sm:text-[10px]  xs:text-[8px] text-gray-500 border-[1px] border-gray-300 border-t-0 border-l-0">
              Quantity
            </div>
            <div className=" w-1/6 h-full flex justify-center items-center text-xs sm:text-[10px]  xs:text-[8px] text-gray-500 border-[1px] border-gray-300 border-t-0 border-l-0">
              Unit Price
            </div>
            <div className=" w-1/6 h-full flex justify-center items-center text-xs sm:text-[10px]  xs:text-[8px] text-gray-500 border-[1px] border-gray-300 border-r-[0px] border-t-0 border-l-0 ">
              Total
            </div>
          </div>

          {(cartData?.map((v) => {

            return (
            <>
              <div className="w-full h-36 flex sm:h-24">
                <div className=" w-1/5 h-full flex justify-center items-center text-xs text-gray-500 border-r-[1px] border-gray-300 p-3 ">
                  <img
                    src={v.img}
                    alt=""
                    className="h-full border-[1px] border-gray-300 rounded-[3px] "
                  />
                </div>
                <div className=" w-1/4  h-full flex flex-col justify-center items-center text-xs text-gray-500 border-r-[1px] border-gray-300  ">
                  {" "}
                  <p className="text-xs mt-5 lgg:text-[10px] sm:text-[7px] xs:text-center">{v.name}</p>
                  {/* <p className="text-[10px] sm:text-[7px] ">43.5</p> */}
                </div>
                <div className=" w-1/4 h-full flex justify-center items-center text-xs text-gray-500 border-r-[1px] border-gray-300 sm:px-2 ">
                  <div className="w-52 h-10 border-[1px] border-gray-300 rounded-md shadow-inner flex lg:w-44 sm:w-24 xs:w-[50px]  lgg:w-32 sm:flex sm:flex-col ">
                    <div className=" w-36 h-full flex items-center px-2 text-sm sm:flex sm:justify-center sm:w-full ">
                      <p>1</p>
                    </div>
                    <div className="flex">
                      <button className="bg-blue-700 w-8 lgg:w-6  sm:w-1/2 sm:rounded-sm sm:h-5"><i class="fa-solid fa-arrows-rotate text-white lgg:text-[9px] "></i></button>
                      <button className="bg-red-500 w-8 rounded-r-md lgg:w-6 sm:w-1/2 sm:rounded-sm sm:h-5 sm:flex sm:justify-center sm:items-center"><i class="fa-solid fa-circle-xmark text-white  lgg:text-[9px] text-lg"></i></button>
                    </div>
                  </div>
                </div>
                <div className=" w-1/6 h-full flex justify-center items-center text-xs text-gray-500 border-r-[1px] border-gray-300 ">
                  <p className=" text-xs sm:text-[10px] xs:text-[8px] xss:text-[6px]">Rs.129,950.00</p>
                </div>
                <div className=" w-1/6 h-full flex justify-center items-center text-xs text-gray-500 border-r-[0px] border-gray-300 ">
                  <p className=" text-xs sm:text-[10px] xs:text-[8px] xss:text-[6px]">Rs.129,950.00</p>
                </div>
              </div>
              <hr />
              </>
            )
          }))}

        </div>

        <div className="w-full   flex justify-between mt-10 sm:flex sm:flex-col  ">
          <button className="h-16 sm:h-12 w-64 border-2 border-black uppercase text-xs font-semibold tracking-wider sm:w-full ">Countiune Shopping</button>
          <button className="w-72 h-16 sm:h-12 border-2 border-black uppercase text-xs font-semibold tracking-wider  sm:w-full sm:mt-5">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
