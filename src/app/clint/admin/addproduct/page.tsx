function page() {
  return (
    <div className="w-full h-full flex justify-end ">
      <div className=" mt-20 flex flex-col items-center justify-center w-[calc(100vw-240px)] h-full">
      <div className=" w-[40%]   ">
        {/* <!-- Product Name  */}
        <div className="mb-4">
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            name="product_name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* <!-- Product Description --> */}
        <div className="mb-4">
          <label
            htmlFor="product-description"
            className="block text-sm font-medium text-gray-700"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            name="product_description"
            className="resize-none w-full h-[200px]  mt-1  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          ></textarea>
        </div>

        {/* <!-- Price --> */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* <!-- Product Image --> */}
        <div className="mb-4">
          <label
            htmlFor="product-image"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="file"
            id="product-image"
            name="product_image"
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 file:text-blue-700 hover:file:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-700 active:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
