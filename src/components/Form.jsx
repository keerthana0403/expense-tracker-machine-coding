import React, { useState } from "react";
import UseExpenceReducer from "../hooks/UseExpenceReducer";

const Form = () => {
  const [data, setData] = useState([{ amount: "", date: "", title: "" }]);
  const [input, setInput] = useState({ amount: "", date: "", title: "" });
  const handleSubmit = () => {
    //localStorage.setItem("Expence", data);
    setData([
      ...data,
      { amount: input.amount, date: input.date, title: input.title },
    ]);
    console.log([
      ...data,
      { amount: input.amount, date: input.date, title: input.title },
    ]);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleInput}
      />
      {/* <input type="text" name="category" placeholder="Choose the category" />
      <select>
        <option>Rent</option>
        <option>Entertainment</option>
      </select> */}
      <input
        type="text"
        name="amount"
        placeholder="Enter the amount"
        onChange={handleInput}
      />
      <input
        type="date"
        name="date"
        placeholder="select date"
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
