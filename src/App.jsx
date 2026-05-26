import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getFormData = (formData) => {
    setUserData([...userData, formData]);
  };

  const handleDelete = (id) => {
    setUserData(userData.filter((data) => {
      return data.id !== id;
    }));
  };

  const total = userData.reduce((acc,data) => {
    return Number(acc)+Number(data.amount)
  },0)

  return (
    <>
      <ExpenseForm onSubmit={getFormData} />
      <ExpenseList data={userData} handleDelete={handleDelete} total={total}/>
    </>
  );
};

export default App;
