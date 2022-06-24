import React, { useState } from "react";
import "antd/dist/antd.css";
import Img from "../imgs/shopApp.png";
import { CgClose } from "react-icons/cg";

function Register() {
  const [show, setShow] = useState(false);

  const handleshow = (e) => {
    e.preventDefault();
    var myButton = document.querySelector("#mybutton");
    var password = document.querySelector("#password");
    if (!show) {
      password.type = "text";
      myButton.innerHTML = "Hide";
      setShow(true);
    } else {
      password.type = "password";
      myButton.innerHTML = "Show";
      setShow(false);
    }
  };
  return (
    <div className="relative w-[832px] h-[395px] rounded-[20px] shadow-login">
      <div className="absolute w-[416px] h-[395px]">
        <img className="rounded-l-lg" src={Img} alt="Sample image" />
      </div>
      <div className="absolute w-[416px] h-[395px] bg-white rounded-r-lg left-[416px] top-[0px]">
        <form className="absolute w-[319.17px] h-[278px] left-[50px] top-[68px]">
          <p className="h-[28px] not-italic font-bold text-[24px] leading-7 font-roboto">
            Welcome to Shop App
          </p>
          <div className=" w-[295.72px] h-[24px] mt-[30px] ml-[11px]">
            <input
              className="w-[285px] h-[19px] ml-[7px] font-roboto text-[#757575]"
              type="text"
              id="username"
              placeholder="User Name"
            />
            <hr className="w-[295.72px] h-0 border border-solid border-[#000000] mt-[5px]" />
          </div>
          <div className=" w-[295.72px] h-[24px] mt-[13px] ml-[11px]">
            <input
              className="w-[143px] h-[19px] ml-[7px] font-roboto text-[#757575]"
              type="email"
              placeholder="Email@mail.com"
            />
            <hr className="w-[295.72px] h-0 border border-solid border-[#000000] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[24px] mt-[13px] ml-[11px]">
            <div className="flex">
              <input
                className="w-[166px] h-[19px] ml-[7px] font-roboto text-[#757575]"
                type="password"
                id="password"
                placeholder="Password"
              />
              <button
                id="mybutton"
                onClick={handleshow}
                className="w-[48px] h-[14px] ml-[70px] not-italic font-bold text-[12px] text-right font-roboto my-auto leading-[14px]"
              >
                Show
              </button>
            </div>
            <hr className="w-[295.72px] h-0 border border-solid border-[#000000] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[24px] mt-[13px] ml-[11px]">
            <input
              className="w-[166px] h-[19px] ml-[7px] font-roboto text-[#757575]"
              type="password"
              placeholder="Confirm Password"
            />
            <hr className="w-[295.72px] h-0 border border-solid border-[#000000] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[37px] ml-[11px] mt-[19px] top-[280px]">
            <button className="w-[295.72px] h-[37px] text-center not-italic font-bold text-[24px] font-roboto leading-7 bg-[#FFD333] rounded-[5px]">
              Register
            </button>
          </div>
          <div className=" w-[295px] h-[16px] text-center mt-[13px] ml-[11px]">
            <a
              className="w-[295px] h-[16px] not-italic font-bold text-[14px] leading-4 text-[#646464] font-roboto"
              href="/login"
            >
              Login
            </a>
          </div>
        </form>
      </div>
      <button>
        <CgClose className="box-border text-[24px] absolute w-[31px] h-[31px] left-[791px] top-[10px] bg-[#ffffff] rounded-[15px] shadow-login border-solid border-[#e4e4e4]" />
      </button>
    </div>
  );
}

export default Register;
