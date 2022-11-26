export default function Header(){
    return(
        <div className="w-full " >
            <div className="w-full h-40 bg-slate-100 flex justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600"> Account </span>
        </h1>
      </div>
      <div className="w-full  px-12 py-12 mt-10 lg:px-24 md:32">
      <h1 className="text-[22px] tracking-wider leading-10 font-medium uppercase">My Account</h1>
      <h1 className=" text-[22px] tracking-wider leading-10 font-medium uppercase">Order History</h1>
      <p className="text-xs leading-8 tracking-wide text-gray-500">You haven't placed any orders yet.</p>
      <h1 className="text-[22px] tracking-wider leading-10 font-medium uppercase">ACCOUNT DETAILS</h1>
      <div className="w-full flex sm:flex sm:flex-col ">
        <div className="w-4/6 h-40 border-gray-500 border-[1px] py-2 px-3 text-sm border-r-0 sm:border-r-[1px] sm:mb-5 sm:w-full flex flex-col justify-between text-gray-500 sm:flex sm:flex-row  sm:justify-around sm:items-center">
          <p className="">Talha Anwar</p>
          <p className="">Pakistan</p>
        </div>
        <div className="w-5/6 h-40 border-gray-500 border-[1px] flex justify-end text-sm items-center px-5 text-gray-500 sm:w-full sm:flex sm:justify-center sm:items-center"> View Address(1)</div>
      </div>
      </div>
        </div>
    )
}