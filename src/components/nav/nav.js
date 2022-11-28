

import logo from ".././../img/logoo.png";
import menu from ".././../img/bg-settings.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { list } from "postcss";

export default function Nav(props) {
  let SignUpHistory = useHistory();

  const [check, setCheck] = useState(false)
  function popUp() {
    setCheck(true);
  }
  function closePop() {
    setCheck(false);
  }

  return (
    <div>
      <nav>
        {/* FOr Desktop Nav*/}
        <div className="h-[92px] flex justify-between items-center px-24 w-full bg-[#F6F6F6] md:px-12 md:py-3 md:flex md:items-end sm:px-2 sm:flex sm:justify-center xs:hidden">
          <h1
            className="font-base flex items-center text-xs  sm:text-[12px]">
            CURRENCY
            <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
          </h1>
          <img
            src={logo}
            className="h-14 bg-cover md:h-full sm:h-12 sm:mx-5  "
            alt=""
            onClick={() => SignUpHistory.push("/Header")}
          />
          <div className="flex items-center sm:text-[12px]">
            <i class="fa-solid fa-magnifying-glass" ></i>
            <i class="fa-brands fa-opencart px-6"></i>

            <img
              src={menu}
              alt=""
              onClick={popUp}
              onDoubleClick={closePop}
              className="h-8 bg-cover"
            />

          </div>
        </div>

        {/* For Mobile Nav*/}
        <div className="h-[92px] flex justify-between items-center pt-6 px-24 w-full bg-[#F6F6F6] xxs:hidden">
          <h1
            className="font-base flex items-center text-xs sm:text-[12px]">
            <i class="fa-brands fa-opencart text-lg" onClick={() => SignUpHistory.push("")}></i>
          </h1>

          <img
            src={logo}
            className="h-16 bg-cover sm:h-12"
            alt=""
            onClick={() => SignUpHistory.push("/Header")}
          />
          <div className="flex items-center sm:text-[12px]">
            <i class="fa-solid fa-magnifying-glass xs:hidden" ></i>
            <i class="fa-brands fa-opencart px-6 xs:hidden" onClick={() => SignUpHistory.push("/Account")}></i>

            <img
              src={menu}
              alt=""
              onClick={popUp}
              onDoubleClick={closePop}
              className="h-8 bg-cover"
            />

          </div>
        </div>




        <div className="h-[76px] w-full border-solid border-[1px] flex justify-center items-center border-gray-200">
          <ul className="font-semibold flex items-center text-xs bg-slate-60 w-[50%] justify-evenly md:w-[80%] sm:w-[90%] sm:text-[10px]">
            <li  onClick={() => SignUpHistory.push("/CartPopUp")} >DESIGNER</li>
            <li onClick={() => SignUpHistory.push("/MenCollection")}>
              MEN <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
            </li>
            <li>
              WOMEN <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
            </li>
            <li>
              SHOP BY{" "}
              <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
            </li>
            <li>
              SALES <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
            </li>
          </ul>
        </div>
      </nav>
      {(check ?
        <div className="w-[300px] absolute h-[240px] mt-[-75px] ml-[71%] flex place-self-end bg-white shadow-lg md:ml-[55%] xs:w-full xs:ml-0 xs:justify-center">
          <div className="px-10">
            <h1 className="text-md border-b-[1px] font-medium h-7 mt-11 uppercase">My Account</h1>
            <ul className="ml-3 font-light text-xs flex flex-col gap-y-4 mt-4 xs:ml-0 xs:items-center">
              <li className="cursor-pointer" onClick={() => SignUpHistory.push("/signIn")}>Sign in</li>
              <li className="cursor-pointer" onClick={() => SignUpHistory.push("/Register")}>Register</li>
              <li>Wish List</li>
              <li>Checkout</li>
            </ul>
          </div>
        </div> : null)}
    </div>
  );
}