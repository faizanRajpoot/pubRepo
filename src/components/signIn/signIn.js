import { useEffect, useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const form = useForm();
  const [state, setState] = useState();
  let [error, setError] = useState(false);
  let [regist, fetchRegister] = useState();

  let history = useHistory();

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  let filter = regist?.map((v, i) => {
    if ((v.email === state.email) & (v.password === state.password)) {
      return i + 1;
    }
  });

  let ass = filter?.filter((v) => {
    return v !== undefined;
  });

  function fetch() {
    axios
      .get("http://127.0.0.1:4000/register")
      .then((res) => fetchRegister(res?.data?.result));
  }

  const handler = (e) => {
    setState(e);
    fetch();

    reset();
  };

  useEffect(() => {
    if (ass?.length === 0) {
      console.log("null");
      setError(true);
    }
    if (ass?.length > 0) {
      // axios
      // .get("http://127.0.0.1:4000/register")
      // .then((res) => fetchRegister(res?.data?.result));
      console.log(ass);
      history.push("/mmm");
    }
  }, [ass]);

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

          <button onClick={()=>history.push('/Register')} className="text-xs border-2 border-black w-32 h-12 mt-5 flex justify-center items-center font-bold ">
            Continue
          </button>
        </div>

        <div className="w-1/2 ml-12 h-full border-[1px] rounded-md border-gray-200 px-5 py-10 md:w-full md:-ml-0 md:mt-10">
          <h1 className="text-[28px] font-medium uppercase">
            Returning Customer
          </h1>
          <h1 className="text-xs font-bold text-gray-700 leading-10">
            I am a returning customer
          </h1>
          {error ? (
            <h1 className="text-red-600 ml-3 text-xs">
              Incorrect email or password
            </h1>
          ) : null}

          <form onSubmit={handleSubmit(handler)}>
            <label className="flex flex-col text-sm text-gray-600 ">
              Email
              <input
                placeholder="Email"
                name="email"
                type="email"
                className={error ? " h-8 border-[1px] outline-none border-red-500 rounded-md px-2":" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"}
                {...register("email", {
                  required: "email is required",
                  maxLength: {
                    value: 30,
                    message: "message",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter correct email",
                  },
                })}
              />
              <p className="text-red-500">
                {formState?.errors?.email?.message}
              </p>
            </label>

            <label className="flex flex-col text-sm mt-3 text-gray-600">
              Password
              <input
                placeholder="Password"
                name="password"
                type="password"
                className={error ? " h-8 border-[1px] outline-none border-red-500 rounded-md px-2":" h-8 border-[1px] outline-none border-gray-400 rounded-md px-2"}
                {...register("password", {
                  required: "password is required",
                  maxLength: {
                    value: 30,
                    message: "message",
                  },
                  minLength: {
                    value: 4,
                    message: "Please Enter Strong Password",
                  },
                })}
              />
              <p className="text-xs mt-1">Forget The Password?</p>
              <p className="text-red-500">
                {formState?.errors?.password?.message}
              </p>
            </label>
            <div className="flex text-sm items-center mt-5">
              <button
                type="submit"
                className=" text-xs border-[2px] font-bold border-black w-32 h-12  flex justify-center items-center"
              >
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