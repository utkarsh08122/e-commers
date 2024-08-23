"use client";

import { Carrot, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import { FaUser } from "react-icons/fa";

function Nav_bar() {
  const istrue = true;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <nav className="fixed z-10 top-0 border border-red-700 w-full flex justify-center">
      <div className="w-full md:w-[90%] h-10  flex justify-between items-center">
    
        <Link href="/" className=" flex-[.4] select-none">Store</Link>
        <div className=" flex justify-between items-center flex-1">
          <div className="md:flex hidden ">
            <input
              type="text"
              name="input"
              id="input"
              placeholder="Search your product"
              className=" w-36 md:w-96 border-2 border-blue-800"
            />
            <Search />
          </div>
          <Link
            href="http://localhost:3000/clint/resale"
            className="select-none flex justify-center rounded-md w-14 md:w-20 text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-600"
          >
            Resale
          </Link>
          <Link href="">
            <FaUser className=" w-5 h-10 " />
          </Link>
          {istrue ? (
            <button className="select-none text-blue-800 w-10   hover:text-blue-700 active:text-blue-600 p-1 ">
              <Carrot
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </button>
          ) : (
            <Link
              href="http://localhost:3000/auth/signup"
              className="select-none text-white  text-xs   md:text-lg bg-blue-800 hover:bg-blue-700 active:bg-blue-600 rounded-xl p-1 "
            >
              Login/Sigup
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <Cart
          open={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
    </nav>
  );
}

export default Nav_bar;
