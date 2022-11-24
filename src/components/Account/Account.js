export default function Account() {
  return (
    <div className="w-full h-screen  ">
      <div className="w-full h-40 bg-[#F6F6F6] flex justify-center items-center md:h-32 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600"> Create Account </span>
        </h1>
      </div>

      <div className="w-full h-96  px-24">
        <div className="w-full h-96 pt-20">
          <div className="">
            <h1 className="text-4xl tracking-wider">Create Account</h1>
            <h3 className="text-lg mt-2 tracking-wider">
              Your Personal Details
            </h3>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-2"></div>
          <form className="w-full h-32 ">
            <div className="flex mt-5">
              <p className="text-lg inline-block w-[128px] ml-24">First Name</p>
              <input
                type="text"
                className=" bg-[#F6F6F6F6] outline-none focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full" id="shadow"
              />
            </div>
            <div className="flex mt-5">
              <p className="text-lg w-32  ml-24">Last-Name</p>
              <input
                type="text"
                className=" bg-[#F6F6F6F6] outline-none focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full" id="shadow"
              />
            </div>

            <div className="flex mt-5">
              <p className="text-lg w-[70px] ml-36">Email</p>
              <input
                type="text"
                className=" bg-[#F6F6F6F6] outline-none focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full" id="shadow"
              />
            </div>

            <div className="flex mt-5">
              <p className="text-lg w-[128px]  ml-24">Password</p>
              <input
                type="text"
                className=" bg-[#F6F6F6F6] outline-none focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full" id="shadow"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
