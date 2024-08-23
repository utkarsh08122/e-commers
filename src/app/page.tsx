import Card from "@/components/Card";
import { Search } from "lucide-react";

function page() {
  return (
    <div className="mt-11 w-full flex flex-col items-center justify-center">
      <div className="flex md:hidden ">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Search your product"
          className="text-sm w-36 md:w-96 border-2 border-blue-800 mb-2"
        />
        <Search />
      </div>
      <div className="w-[90%] justify-between flex flex-wrap overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
