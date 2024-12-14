import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-black p-6 border-r">
      <h2 className="text-2xl font-bold decoration-slice underline-offset-4 decoration-black ">
        Groceries
      </h2>
      <div className="mt-2 ">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className=" text-black-600">
              <th colSpan="2" className="p-3 border-b border-blue-gray-100 text-left m">
              <button className="flex items-center justify-center w-full h-full  text-[14px] font-[Helvetica] font-normal leading-[21px] text-decoration-skip-ink-none ">
  <span className="mr-3 ">+</span> New list
</button>



              </th>
            </tr>
          </thead>
          
          <tbody>
          <tr className="hover:bg-[#EDF0FF]   cursor-pointer border-b border-blue-gray-100">
          <td className="p-3 flex items-center whitespace-nowrap">
          All <span className="text-gray-500 mx-1">(999 items)</span></td>
          </tr>
          <tr className="hover:bg-[#EDF0FF] cursor-pointer border-b border-blue-gray-100">
          <td className="p-3 flex items-center whitespace-nowrap">
          Fruits <span className="text-gray-500 mx-1">(99 items)</span></td>
          </tr>
          <tr className="hover:bg-[#EDF0FF] cursor-pointer border-b border-blue-gray-100">
          <td className="p-3 flex items-center whitespace-nowrap">
          Vegetables <span className="text-gray-500 mx-1">(99 items)</span></td>
          </tr>
          <tr className="hover:bg-[#EDF0FF] cursor-pointer border-b border-blue-gray-100">
          <td className="p-3 flex items-center whitespace-nowrap">
          Meats <span className="text-gray-500 mx-1">(99 items)</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;