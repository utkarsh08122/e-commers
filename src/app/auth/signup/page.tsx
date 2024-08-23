"use client";
import { useState } from "react";
function page() {
  const [istrue, setistrue] = useState<boolean>(false);

  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full h-full">
      <div className="w-[90%] md:w-[30%]">
        {/* <!-- Product Name  */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* <!-- Price --> */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* <!-- Product Image --> */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              setistrue(true);
            }}
         >
            Signup
          </button>
          {istrue && <p className="text-red-700">User is already ragister</p>}
        </div>
      </div>
    </div>
  );
}

export default page;
