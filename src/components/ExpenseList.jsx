import React from "react";

const ExpenseList = ({ data, handleDelete, total }) => {
  console.log(data);
  return (
    <div>
      {data.map((cdata) => {
        return (
          <React.Fragment key={cdata.id}>
            <div>Amount:{cdata.amount}</div>
            <div>Description:{cdata.description}</div>
            <div>Catagory:{cdata.catagory}</div>
            <div>Total:{total}</div>
            <button onClick={() => handleDelete(cdata.id)}>Delete</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExpenseList;
