import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-black p-6 border-r">
      <h2 className="text-2xl font-bold decoration-slice underline-offset-4 decoration-black">
        Groceries
      </h2>
      <div className="mt-2">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className=" text-black-600">
              <th colSpan="2" className="p-3 border-b border-blue-gray-100 text-left m">
              <button className=" flex items-center text-black  border-black  ">
  <span className="text-xl ">+</span> New list
</button>


              </th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="hover:bg-gray-100 cursor-pointer border-b border-blue-gray-100">
              <td className="p-3">All</td>
              <td className="p-3 text-gray-500">(999 items)</td>
            </tr>
            <tr className="hover:bg-gray-100 cursor-pointer border-b border-blue-gray-100">
              <td className="p-3">Fruits</td>
              <td className="p-3 text-gray-500">(99 items)</td>
            </tr>
            <tr className="hover:bg-gray-100 cursor-pointer border-b border-blue-gray-100">
              <td className="p-3">Vegetables</td>
              <td className="p-3 text-gray-500">(99 items)</td>
            </tr>
            <tr className="hover:bg-gray-100 cursor-pointer border-b border-blue-gray-100">
              <td className="p-3">Meats</td>
              <td className="p-3 text-gray-500">(99 items)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
