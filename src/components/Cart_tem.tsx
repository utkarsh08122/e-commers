function Cart_Item() {
  return (
    <div className="border-2 h-32 flex justify-between ">
      <div className="flex-[0.5] border-2">
        <img className="w-full h-full bg-red-700" src="" alt="qsc" />
      </div>
      <div className="border-2 flex-1 flex justify-between">
        <div className="flex-1 w-full h-full ml-2">
          <p className="font-bold">Redmi-Note-8</p>
          <p>
            Q:<span className="text-red-700">1</span>
          </p>
          <p>mrp: <span className="text-red-700">123</span></p>
          <div className="flex w-20 border ">
            <p className="flex-1 border flex justify-center font-bold ">-</p>
            <p className="flex-1 border flex justify-center">12</p>
            <p className="flex-1 border flex justify-center font-bold">+</p>
          </div>
        </div>
        <div>X</div>
      </div>
    </div>
  );
}

export default Cart_Item;
