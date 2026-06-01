import { useEffect, useState } from "react";

const ExpenseForm = ({ onSubmit,editData }) => {
  const initialValue = {
    amount: "",
    description: "",
    catagory: "",
  };

  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    if(editData === null){}
    else{
      setFormData(editData)
    }
  },[editData])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseObject = {
      ...formData,
      id: Date.now(),
    };

    onSubmit(expenseObject);

    setFormData(initialValue);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3 mt-8">
    <h1 className="font-black text-3xl">Expense Tracker app</h1>
      <form action="" onSubmit={handleSubmit} className="border rounded-lg bg-taupe-50 flex flex-col p-4 gap-3">
        <div className="flex">
          <div>
            <label htmlFor="amount" >Enter amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter the amount"
              required
              onChange={handleChange}
              value={formData.amount}
              className="bg-white border border-gray-300 rounded-md px-2.5 py-1.5"
            />
          </div>
          <div>
            <label htmlFor="description">Enter the description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter the description"
              required
              onChange={handleChange}
              value={formData.description}
              className="bg-white border border-gray-300 rounded-md px-2.5 py-1.5"
            />
          </div>
          <div>
            <label htmlFor="catagory">
              Select Catagory of expense:
            </label>
            <select
              name="catagory"
              id="catagory"
              onChange={handleChange}
              value={formData.catagory}
              className="bg-white border border-gray-300 rounded-md px-2.5 py-1.5"
            >
              <option value="" disabled hidden>Select catagory</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="grocery">grocery</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
          
        </div>
          <button type="submit" className="bg-indigo-600 text-white self-start px-3 py-1 rounded-lg cursor-pointer">Submit</button>
        </form>
    </div>
  );
};

export default ExpenseForm;