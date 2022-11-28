import React from "react";
import cartImg from "../../img/cartPop/cart1.png";

function cartPopUp() {
  return (
    <div className="w-full  ">
      <div className="w-full h-44 bg-[#F6F6F6] flex flex-col justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-5xl font-semibold mb-5 lg:text-3xl md:text-2xl">BB Venus La Petit Aurum</h1>
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600"> BB Venus La Petit Aurum </span>
        </h1>
      </div>
      <div className="w-full h-[700px]  flex lg:h-[650px] lgg:h-[600px] md:flex md:flex-col md:h-full md:pb-16 ">
        <div className="w-1/2 h-full  py-12 pl-24 pr-0 md:w-full md:h-[750px] md:px-5 md:py-0 md:pt-5  xs:h-[500px]">
          <img src={cartImg} alt="Blank" className="w-full h-full" />
        </div>
        <div className="w-1/2 h-full py-12 px-5 pr-10 md:py-2 md:w-full">
          <p className="text-xl font-medium">BB Venus La Petit Aurum</p>
          <p className="mt-20 lgg:mt-7 md:mt-20">Rs.209,950.00</p>

          <p className="text-xs tracking-widest mt-6 lgg:mt-4 ">
            Availibility : <span className="text-red-600"> In Stock</span>
          </p>
          <div className="w-full h-[1px] bg-gray-200 mt-8 lgg:mt-5 md:w-full  "></div>

          <p className="text-xs leading-7 pr-20 mt-10 lg:pr-5 lgg:pr-0 lgg:mt-5 md:w-full ">
            This clutch is a tribute to the goddess of Love and Beauty and the
            magical moment in which every woman, who loves and is loved, is
            transformed. From mortal becomes goddess in a perfect
            personification of Venus. With soft and wavy shapes, Venus is made
            with a network of sparkling...
          </p>
          <div className="flex flex-col md:w-full md:flex md:flex-row md:items-center md:justify-between md:mt-5  ">
          <div className="flex items-center w-2/3  justify-between lg:w-full  lg:flex lg:justify-between lg:items-center md:w-3/5 sm:w-4/7 xs:w-3/5">
            <p className="">Qty:</p>
            <div className="w-32 h-16 border-gray-200 border-[1px] flex  lgg:w-24 sm:w-20 xs:w-16">
              <div className="w-5/6 flex justify-center items-center text-xl sm:text-lg xs:text-sm">
                1
              </div>

              <div className="flex flex-col ">
                <button className=" h-full w-full border-gray-200 border-l-[1px] px-2 ">
                  +
                </button>
                <button className=" h-full w-full border-gray-200 border-[1px]  px-2 border-r-0 border-b-0">
                  -
                </button>
              </div>
            </div>

            <button className="w-48 h-16 border-2 border-[#e73333] text-[#e73333] uppercase text-xs font-bold flex justify-center items-center lgg:w-36 sm:w-28 sm:text-[10px] xs:w-20 xs:text-[7px]">
              <i class="fa-sharp fa-solid fa-bag-shopping pr-2"></i>
              Add To Cart
            </button>
          </div>
          <div className="flex mt-10 w-1/2 justify-between lg:w-2/3  lg:flex lg:justify-between lg:items-center lgg:w-4/6 md:w-2/5 md:mt-0 md:ml-8 sm:ml-4 sm:w-3/7 xs:w-2/5">
            <button className="w-48  h-16 border-2 border-[#4EC248] text-[#4EC248] uppercase text-lg tracking-wider font-bold flex justify-center items-center lgg:w-36 lgg:text-sm sm:w-28 sm:text-[10px]
            xs:w-20 xs:text-[7px]">
              <i class="fa-brands fa-whatsapp pr-2"></i>
              Whatsapp
            </button>
            <button className="h-16 w-20 border-gray-200 border-2 lgg:w-14 sm:w-10 xs:w-7 ">
              <i class="fa-regular fa-heart text-xl sm:text-[14px] xs:text-[10px]"></i>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cartPopUp;
