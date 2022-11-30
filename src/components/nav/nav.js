import logo from ".././../img/logoo.png";
import menu from ".././../img/bg-settings.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Account from "../Register/Register";

export default function Nav(props) {

  let SignUpHistory = useHistory();

  const [check, setCheck] = useState(false)
  const [Cartcheck, setCartCheck] = useState(false)

  function popUp() {
    setCheck(true);
    setCartCheck(false);
  }
  function closePop() {
    setCheck(false);
  }

  function goCart() {
    setCartCheck(true);
    setCheck(true);
  }

  function closeCart() {
    setCheck(false);
  }

  function goSignIn() {
    SignUpHistory.push('/signIn');
    setCheck(false);
  }

  function goRegister() {
    SignUpHistory.push('/Register');
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
            className="h-14 bg-cover md:h-full sm:h-12 sm:mx-5  cursor-pointer"
            alt=""
            onClick={() => SignUpHistory.push("/Header")}
          />
          <div className="flex items-center sm:text-[12px]">
            <i class="fa-solid fa-magnifying-glass cursor-pointer" ></i>
            <i onClick={goCart} onDoubleClick={closeCart} class="fa-brands fa-opencart px-6 cursor-pointer"></i>

            <img
              src={menu}
              alt=""
              onClick={popUp}
              onDoubleClick={closePop}
              className="h-8 bg-cover cursor-pointer"
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
            className="h-16 bg-cover sm:h-12 cursor-pointer"
            alt=""
            onClick={() => SignUpHistory.push("/Header")}
          />
          <div className="flex items-center sm:text-[12px]">
            <i class="fa-solid fa-magnifying-glass xs:hidden cursor-pointer" ></i>
            <i onClick={goCart} onDoubleClick={closeCart} class="fa-brands fa-opencart px-6 xs:hidden cursor-pointer"></i>

            <img
              src={menu}
              alt=""
              onClick={popUp}
              onDoubleClick={closePop}
              className="h-8 bg-cover cursor-pointer"
            />

          </div>
        </div>




        <div className="h-[76px] w-full border-solid border-[1px] flex justify-center items-center border-gray-200">
          <ul className="font-semibold flex items-center text-xs bg-slate-60 w-[50%] justify-evenly md:w-[80%] sm:w-[90%] sm:text-[10px]">
            <li onClick={() => SignUpHistory.push("/CartPopUp")} >DESIGNER</li>
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
        <div className="w-[300px] absolute mt-[-75px] pb-6 ml-[71%] flex place-self-end bg-white shadow-lg md:ml-[55%] xs:w-full xs:ml-0 xs:justify-center">
          {(Cartcheck ?
            <div className="w-full px-4 overflow-y-scrol">
              
              <div className="w-full flex mt-6">
                <div className="w-24 h-20 bg-gray-400"></div>
                <div className="w-36 pl-3">
                  <h1 className="text-sm font-medium">Product Name</h1>
                  <p className="text-xs font-light py-3">Quantity</p>
                  <p className="text-xs font-light">Price</p>
                </div>
                <div className="flex justify-center">x</div>
              </div>

              <div className="w-full flex mt-6">
                <div className="w-24 h-20 bg-gray-400"></div>
                <div className="w-36 pl-3">
                  <h1 className="text-sm font-medium">Product Name</h1>
                  <p className="text-xs font-light py-3">Quantity</p>
                  <p className="text-xs font-light">Price</p>
                </div>
                <div className="flex justify-center">x</div>
              </div>

              <div className="flex justify-between h-14 items-center border-b-2 border-gray-300">
                <h1>Subtotal:</h1>
                <p>Rs:5426</p>
              </div>

              <div>
                <button className="text-sm uppercase font-normal bg-transparent border-2 border-black w-full py-3 my-4">View Cart</button>
                <button className="text-sm uppercase font-normal bg-transparent border-2 border-black w-full py-3">Checkout</button>
              </div>

            </div>
            : <div className="px-10">
              <h1 className="text-md border-b-[1px] font-medium h-7 mt-11 uppercase">My Account</h1>
              <ul className="ml-3 font-light text-xs flex flex-col gap-y-4 mt-4 xs:ml-0 xs:items-center">
                <li className="cursor-pointer" onClick={goSignIn}>Sign in</li>
                <li className="cursor-pointer" onClick={goRegister}>Register</li>
                <li>Wish List</li>
                <li>Checkout</li>
              </ul>
            </div>)}
        </div> : null)}
    </div>
  );
}