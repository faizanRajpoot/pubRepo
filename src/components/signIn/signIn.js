import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";


export default function SignIn() {

  const form = useForm();
  const [state, setState] = useState()
  // console.log('sta', state);

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  const handler = (e) => {
    setState(e);
    reset();
  }

  return (
    <div className="w-full h-full  ">
      <div className="w-full h-60 bg-slate-100 flex justify-center items-center md:h-48 sm:h-32">
        <h1 className="text-sm tracking-widest">
          Home / <span className="text-red-600"> Account </span>
        </h1>
      </div>
      <div className="lg: w-full p-12 flex justify-between md:flex md:flex-col ">
        <div className="w-1/2 h-full border-[1px] rounded-md border-gray-200  px-5 py-10 md:w-full ">
          <h1 className="text-[27px] font-medium uppercase">New Customer</h1>
          <h1 className="text-xs font-bold text-gray-700 leading-10">
            Register Account
          </h1>
          <p className="text-xs font-light tracking-wide ">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>

          <p className="text-xs border-2 border-black w-32 h-12 mt-5 flex justify-center items-center font-bold ">
            Continue
          </p>
        </div>

        <div className="w-1/2 ml-12 h-full border-[1px] rounded-md border-gray-200 px-5 py-10 md:w-full md:-ml-0 md:mt-10">
          <h1 className="text-[28px] font-medium uppercase">Returning Customer</h1>
          <h1 className="text-xs font-bold text-gray-700 leading-10">
            I am a returning customer
          </h1>

          <form onSubmit={handleSubmit(handler)}>

            <label className="flex flex-col text-sm text-gray-600 ">
              Email
              <input placeholder="Email" name="email" type="email" className=" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"
                {...register('email', {
                  required: 'email is required',
                  maxLength: {
                    value: 30,
                    message: 'message'
                  },
                  minLength: {
                    value: 4,
                    message: 'Enter correct email'
                  }
                })} />
              <p className="text-red-500">{formState?.errors?.email?.message}</p>
            </label>

            <label className="flex flex-col text-sm mt-3 text-gray-600">
              Password
              <input placeholder="Password" name="password" type="password" className=" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"
                {...register('password', {
                  required: 'password is required',
                  maxLength: {
                    value: 30,
                    message: 'message'
                  },
                  minLength: {
                    value: 4,
                    message: 'Please Enter Strong Password'
                  }
                })} />
              <p className="text-xs">Forget The Password?</p>
              <p className="text-red-500">{formState?.errors?.password?.message}</p>
            </label>
            <div className="flex text-sm items-center mt-5">
              <button className=" text-xs border-[2px] font-bold border-black w-32 h-12  flex justify-center items-center">
                Sign In
              </button>

              <p className=" text-xs ml-2 ">Or Return To Store </p>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}