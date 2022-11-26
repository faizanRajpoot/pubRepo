import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Account() {
  let [data, setData] = useState();

  let { handleSubmit, register, formState, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

useEffect(()=>{
  axios.post("http://127.0.0.1:4000/register",data)

},[data])

  function handle(e) {
    setData(e);


    reset();
  }

  return (
    <div className="w-full h-full  ">
      <div className="w-full h-40 bg-[#F6F6F6] flex justify-center items-center md:h-32 sm:h-32">
        <h1 className="text-xs tracking-widest">
          Home / <span className="text-red-600"> Create Account </span>
        </h1>
      </div>

      <div className="w-full   px-24 py-20 md:px-5">
        <div className="w-full  pt-10">
          <div className="">
            <h1 className="text-4xl tracking-wider">Create Account</h1>
            <h3 className="text-lg mt-2 tracking-wider">
              Your Personal Details
            </h3>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-2"></div>
          <form className="w-full  " onSubmit={handleSubmit(handle)}>
            <div className="flex mt-5 md:flex md:flex-col">
              <p className="text-sm text-gray-700 w-[128px] ml-24 md:ml-0">
                First Name
              </p>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className={
                  formState?.errors?.first_name?.message
                    ? " border-[1px] border-red-800  outline-none text-xs px-2 focus:border-red-300 focus:border-[2px] rounded-md h-7 w-full"
                    : " border-[1px] border-gray-200  outline-none text-xs px-2 focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full"
                }
                id="shadow"
                {...register("first_name", {
                  required: "Please enter name",
                })}
              />
            </div>
            <div className="flex mt-5 md:flex md:flex-col">
              <p className="text-sm text-gray-700 w-32  ml-24 md:ml-0">Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                id="shadow"
                className={
                  formState?.errors?.last_name?.message
                    ? " border-[1px] border-red-800  outline-none text-xs px-2 focus:border-red-300 focus:border-[2px] rounded-md h-7 w-full"
                    : " border-[1px] border-gray-200  outline-none text-xs px-2 focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full"
                }
                {...register("last_name", {
                  required: "Please enter name",
                })}
              />
            </div>

            <div className="flex mt-5 md:flex md:flex-col">
              <p className="text-sm text-gray-700 w-[90px] ml-32 md:ml-0">Email</p>
              <input
                type="text"
                placeholder="Email"
                id="shadow"
                className={
                  formState?.errors?.email?.message
                    ? " border-[1px] border-red-800  outline-none text-xs px-2 focus:border-red-300 focus:border-[2px] rounded-md h-7 w-full"
                    : " border-[1px] border-gray-200  outline-none text-xs px-2 focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full"
                }
                {...register("email", {
                  required: "Please enter name",
                })}
              />
            </div>

            <div className="flex mt-5 md:flex md:flex-col">
              <p className="text-sm text-gray-700 w-[129px]  ml-24 md:ml-0">Password</p>
              <input
                type="text"
                placeholder="Password"
                id="shadow"
                className={
                  formState?.errors?.password?.message
                    ? " border-[1px] border-red-800  outline-none text-xs px-2 focus:border-red-300 focus:border-[2px] rounded-md h-7 w-full"
                    : " border-[1px] border-gray-200  outline-none text-xs px-2 focus:border-blue-300 focus:border-[1px]   rounded-sm h-7 w-full"
                }
                {...register("password", {
                  required: "Please enter name",
                })}
              />
            </div>
            <button type="submit" className="flex items-center mt-5 ">
              <p className=" text-sm border-[2px] font-medium uppercase border-black w-32 h-14  flex justify-center items-center">
                Create
              </p>

              <p className=" text-xs ml-4 ">Or Return To Store </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
