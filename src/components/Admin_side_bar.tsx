import Link from "next/link";
import React from "react";

function Admin_side_bar() {
  return (
    <div className="fixed top-0 w-60 h-[calc(100vh-40px)] mt-10 ">
      <div className="flex w-full h-full flex-col items-center text-white  gap-7">
        <Link href="http://localhost:3000/clint/admin/dashboard" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600 mt-7">
          Dashboard
        </Link>
        <Link href="http://localhost:3000/clint/admin/addproduct" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
          Add-Products
        </Link>
        <Link href="http://localhost:3000/clint/admin/account" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
          Accounts
        </Link>
        <Link href="http://localhost:3000/clint/admin/transation" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600 ">
          Transations
        </Link>
        <Link href="" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
          Analytics
        </Link>
        <Link href="http://localhost:3000/clint/admin/resale" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
          Resale
        </Link>

        <Link href="" className="w-[90%] border p-2 rounded bg-blue-800 hover:bg-blue-700 active:bg-blue-600">
          Setting
        </Link>
      </div>
    </div>
  );
}

export default Admin_side_bar;
