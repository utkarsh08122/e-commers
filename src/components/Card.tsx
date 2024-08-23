function Card() {
  return (
    <div className="mt-1 mb-5 border hover:shadow-2xl border-blue-800 hover:border-blue-700 active:border-blue-600 rounded-lg w-[48%] h-56 md:w-[22%] md:h-80 flex flex-col">
      <div className="flex-1">
        <img className="w-full h-full bg-pink-600" src="" alt="lol" />
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center justify-center">
        <h2 className=" text-xs   md:text-xl border  w-36  md:w-56  ">
          Readmi not 8
        </h2>
        <p className=" text-xs   md:text-lg  border w-36  md:w-56 ">
          M.R.P.: <span className="text-blue-800">1,234</span>
        </p>
        <button className="w-36  md:w-56 select-none text-white  text-xs   md:text-lg bg-blue-800 hover:bg-blue-700 active:bg-blue-600 rounded-xl p-1 ">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
