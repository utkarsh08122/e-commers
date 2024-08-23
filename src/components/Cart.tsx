import { Crop } from "lucide-react";
import Cart_Item from "./Cart_tem";

function Cart({ open }: any) {
  return (
    <div className=" fixed flex justify-end z-20  w-full h-full bg-black/5 ">
      <div className="w-full md:w-96 h-full bg-white">
        <div className="flex flex-1 justify-between border-b-2 p-2">
          <p>Cart items</p>

          <Crop onClick={open} className="text-red-500 " />
        </div>
        <div className="p-2">
          <Cart_Item />
        </div>
      </div>
    </div>
  );
}

export default Cart;
