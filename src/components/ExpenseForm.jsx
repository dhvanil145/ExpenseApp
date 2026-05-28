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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Enter amount</label>

          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter the amount"
            required
            onChange={handleChange}
            value={formData.amount}
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
          >
            <option value="" disabled hidden></option>

            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="grocery">grocery</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;