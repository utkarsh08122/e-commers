function page() {
  return (
    <div className="w-full h-full flex justify-end ">
      <div className=" mt-10 flex flex-col items-center justify-center w-[calc(100vw-240px)] h-full">
        <div>
          <table className="w-full ">
            <thead>
              <tr className="flex w-full  mt-2  ">
                <th className="w-[220px] ">S.NO.</th>
                <th className="w-[220px]">Name</th>
                <th className="w-[220px]">Prise</th>
                <th className="w-[220px]">Picture</th>
                <th className="w-[220px]">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex  w-full border-t-2 mt-2">
                <td className="w-[220px] flex justify-center ">1.</td>
                <td className="w-[220px] flex justify-center ">Redmi note 8</td>
                <td className="w-[220px] flex justify-center ">1,000</td>
                <td className="w-[220px] flex justify-center ">Picture</td>
                <td className="w-[220px] flex justify-center ">delete/update</td>
              </tr>
              <tr className="flex  w-full border-t-2 mt-2">
                <td className="w-[220px] flex justify-center ">1.</td>
                <td className="w-[220px] flex justify-center ">Redmi note 8</td>
                <td className="w-[220px] flex justify-center ">1,000</td>
                <td className="w-[220px] flex justify-center ">Picture</td>
                <td className="w-[220px] flex justify-center ">Action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
