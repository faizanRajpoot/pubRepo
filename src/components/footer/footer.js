export default function Footer(){
    return(
        <>
        <div className="w-full h-[450px] bg-[#292929] md:h-full  sm:w-full sm:h-full">
          <div className="grid grid-cols-6 py-16 px-20 gap-x-16  md:h-full md:py-12 md:flex md:flex-wrap md:items-start justify-between sm:flex sm:flex-col sm:flex-wrap sm:w-full">
            <div className="col-span-3 h-10 md:col-span-6  md:w-[50%] md:h-20 sm:w-full">
              <h1 className="text-md font-medium text-white tracking-tighter">
                Contact Us
              </h1>
              <p className="text-xs font-thin tracking-widest leading-6 mt-10 opacity-80 text-white">
                The business started by the late H Karim Buksh in 1927 grew from
                strength to strength over time to what It is today. Branched out
                into Luxury retail with an extensive portfolio of the world’s
                best fashion and lifestyle brands.
                <br /> +92 346 6666664
              </p>
              <div className="md:w-[50%] md:h-20 md:mt-0 sm:w-full ">
              <h1 className="text-md font-medium text-white mt-10 tracking-tighter ">
                Connect With Us:
              </h1>
              <div className="flex gap-x-4">
                <div className="facebook w-10 mt-4 h-10 flex justify-center items-center rounded-full bg-sky-500">
                  <i class="fa-brands fa-facebook-f text-white text-sm font-light"></i>
                </div>
                <div className="insta w-10 mt-4 h-10 flex justify-center items-center rounded-full bg-sky-500">
                  <i class="fa-brands fa-instagram text-white text-sm font-light"></i>
                </div>
              </div>
              </div>
            </div>
            <div className="md:col-span-6 md:w-[50%] md:h-20 md:ml-[75%] md:-mt-20 sm:w-full sm:-ml-0 sm:mt-[240px]">
              <h1 className="text-md font-medium text-white">Opening Time</h1>
              <div className="mt-10 flex flex-col gap-y-4 opacity-80">
                <p className="text-xs tracking-normal font-thin text-white">
                  Monday- Thursday & Saturday 11am - 10 pm
                </p>
                <p className="text-xs tracking-normal font-thin text-white">
                  Friday- Sunday 3:30 pm - 11 pm
                </p>
              </div>
            </div>
            <div className="md:w-[50%] md:h-20 md:mt-80 sm:mt-20 sm:w-full">
              <h1 className="text-md font-medium text-white">Customer Care</h1>
              <div className="mt-10 flex flex-col gap-y-5 opacity-80">
                <p className="text-xs tracking-normal font-thin text-white">
                  Contact Us
                </p>
                <p className="text-xs tracking-normal font-thin text-white">
                  Customer Service
                </p>
                <p className="text-xs tracking-normal font-thin text-white">
                  FAQ's
                </p>
                <p className="text-xs tracking-normal font-thin text-white">
                  Shipping Policy
                </p>
              </div>
            </div>
            <div className="md:w-[50%] md:h-full md:ml-[75%] md:-mt-20 sm:-ml-0 sm:mt-40">
              <h1 className="text-md font-medium text-white">Information</h1>
              <div className="mt-10 flex flex-col gap-y-5 opacity-80">
                <p className="text-xs tracking-normal font-extralight text-white">
                  About us
                </p>
                <p className="text-xs tracking-normal font-extralight text-white">
                  Our Projects
                </p>
                <p className="text-xs tracking-normal font-extralight text-white">
                  Careers
                </p>
                <p className="text-xs tracking-normal font-extralight text-white">
                  Return & Exchange Policy
                </p>
                <p className="text-xs tracking-normal font-extralight text-white">
                  Visitor Guidelines
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex justify-center items-center w-full h-24 border-t-2 bg-[#292929]">
          <p className="text-gray-500 text-xs font-light">
            ©2022 The Boutique All Rights Reserved
          </p>
        </div>
      </>
    )
}