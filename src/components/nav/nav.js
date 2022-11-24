// import React, { useCallback, useHistory, useState} from "react";
import logo from ".././../img/logoo.png";
import menu from ".././../img/bg-settings.png";
import { useHistory } from "react-router-dom";

export default function Nav() {
let SignUpHistory = useHistory();
let homePage = useHistory();

  return (
    <div>
      <nav>
        <div className="h-[92px] flex justify-between items-center px-24 w-full bg-[#F6F6F6]">
          <h1 className="font-base flex items-center text-xs">
            CURRENCY{" "}
            <i class="fa-solid fa-chevron-down text-[9px] pl-[5px]"></i>
          </h1>
          <img onClick={()=> homePage.push('/home')} src={logo} className="h-14 bg-cover" alt="" />
          <div className="flex items-center">
            <i class="fa-solid fa-magnifying-glass "></i>
            <i class="fa-brands fa-opencart px-6"></i>

            <img src={menu} alt="" onClick={()=> SignUpHistory.push('/signIn')} className="h-8 bg-cover" />
          </div>
        </div>
        <div className="h-[76px] w-full border-solid border-[1px] flex justify-center items-center border-gray-200">
          <ul className="font-semibold flex items-center text-xs bg-slate-60 w-[50%] justify-evenly">
            <li>DESIGNER</li>
            <li>
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
     
    </div>
  );
}
