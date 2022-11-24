export default function SignIn() {
  return (
    <div className="w-full h-full  ">
      <div className="w-full h-60 bg-slate-100 flex justify-center items-center">
        <h1 className="text-sm tracking-widest">
          Home / <span className="text-red-600"> Account </span>
        </h1>
      </div>
      <div className="w-full p-12 flex justify-between">
        <div className="w-1/2 h-full border-[1px] rounded-md border-gray-200  px-5 py-10 ">
          <h1 className="text-[27px] font-medium uppercase">New Customer</h1>
          <h1 className="text-xs font-bold text-gray-700 leading-10">
            Register Account
          </h1>
          <p className="text-xs font-light tracking-wide ">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>

          <p className=" border-2 border-black w-[20%] h-12 mt-5 flex justify-center items-center font-semibold">
            Continue
          </p>
        </div>
        <div className="w-1/2 ml-12 h-full border-[1px] rounded-md border-gray-200 px-5 py-10">
          <h1 className="text-[28px] font-medium uppercase">Returning Customer</h1>
          <h1 className="text-xs font-bold text-gray-700 leading-10">
          I am a returning customer 
          </h1>
            

            <label className="flex flex-col text-sm text-gray-600 ">
                Email
                <input placeholder="Email" type="text"  className=" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"/>
            </label>

            <label className="flex flex-col text-sm mt-3 text-gray-600">
                Password
                <input placeholder="Password" type="text"  className=" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"/>
                <p className="text-xs">Forget The Password?</p>
            </label>
             <div className="flex text-sm items-center mt-5">
            <p className=" border-[2px] font-semibold border-black w-[20%] h-12  flex justify-center items-center">
            Sign In
          </p>

          <p className=" text-xs ml-2 ">Or Return To Store </p>

          </div>
           
        </div>
      </div>
    </div>
  );
}
