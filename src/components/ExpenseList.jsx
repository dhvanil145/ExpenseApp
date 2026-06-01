import React from "react";

const ExpenseList = ({ data, handleDelete, total, handleFilter,handleEdit }) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">
      <h2 className="text-2xl text-indigo-600 bg-purple-100 font-bold rounded-sm border border-gray-300 mt-4">Total: {total}</h2>
      <div className="flex gap-5 *:bg-indigo-600 *:text-white *:rounded-lg *:cursor-pointer *:px-3 *:py-1.5">
        <button onClick={() => handleFilter("All")} >All</button>
        <button onClick={() => handleFilter("Food")} >Food</button>
        <button onClick={() => handleFilter("Travel")} >Travel</button>
        <button onClick={() => handleFilter("grocery")} >Grocery</button>
        <button onClick={() => handleFilter("Electric")} >Electric</button>
      </div>
      {data.map((cdata) => {
        console.log(cdata);
        return (
          <React.Fragment key={cdata.id}>
            <div className="border border-gray-300 rounded-lg flex justify-between items-center bg-taupe-50 p-4">
              <div>
                <div><strong>Description:</strong> {cdata.description}</div>
                <div><strong>Catagory:</strong> {cdata.catagory}</div>
              </div>
              <div>
                <div className="text-green-500 font-bold ">💲:{cdata.amount}</div>
                <button onClick={() => handleDelete(cdata.id)} className=" bg-indigo-600 text-white rounded-lg cursor-pointer px-1.5 py-1.5">Delete</button>
                <button onClick={() => handleEdit(cdata.id)} className=" bg-indigo-600 text-white rounded-lg cursor-pointer px-2.5 py-1.5 ms-2">Edit</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExpenseList;
