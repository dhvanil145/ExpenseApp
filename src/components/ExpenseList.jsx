import React from "react";

const ExpenseList = ({ data, handleDelete, total, handleFilter,handleEdit }) => {
  return (
    <div>
      <h1>Total:{total}</h1>
      <button onClick={() => handleFilter("All")}>All</button>
      <button onClick={() => handleFilter("Food")}>Food</button>
      <button onClick={() => handleFilter("Travel")}>Travel</button>
      <button onClick={() => handleFilter("grocery")}>Grocery</button>
      <button onClick={() => handleFilter("Electric")}>Electric</button>
      {data.map((cdata) => {
        console.log(cdata);
        return (
          <React.Fragment key={cdata.id}>
            <div>Amount:{cdata.amount}</div>

            <div>Description:{cdata.description}</div>

            <div>Catagory:{cdata.catagory}</div>

            <button onClick={() => handleDelete(cdata.id)}>Delete</button>
            <button onClick={() => handleEdit(cdata.id)}>Edit</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExpenseList;
