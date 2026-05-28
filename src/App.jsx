import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editData,setEditData] = useState(null)

  const getFormData = (formData) => {
    if(editData === null){
      setUserData([...userData, formData]);
      
    }
    else{
      setUserData(userData.map((data) => {
        if(data.id === editData.id){
          return (formData)
        }
        return data
      }))
      setEditData(null)
    }
  };

  const handleDelete = (id) => {
    setUserData(
      userData.filter((data) => {
        return data.id !== id;
      })
    );
  };

  const total = userData.reduce((acc, data) => {
    return Number(acc) + Number(data.amount);
  }, 0);

  const filterData =
    filter === "All"
      ? userData
      : userData.filter((data) => {
          return data.catagory === filter;
        });

  const handleFilter = (catagory) => {
    setFilter(catagory);
  };

  const handleEdit = (id) => {
    setEditData(
      userData.find((data) => {
        return data.id === id
      })
    )
  }
  console.log(editData);

  return (
    <>


      <ExpenseForm onSubmit={getFormData} editData={editData}/>

      <ExpenseList
        data={filterData}
        handleDelete={handleDelete}
        total={total}
        handleFilter = {handleFilter}
        handleEdit = {handleEdit}
      />
    </>
  );
};

export default App;