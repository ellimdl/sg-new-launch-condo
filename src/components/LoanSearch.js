import React from "react";
import { useState } from "react";

export default function LoanSearch(props) {
  const [input, setInput] = useState({
    loanAmount: "",
    interestRate: "",
    durationYears: "",
  });

  const handleChange = (element) => {
    const name = element.target.name;
    const value = element.target.value;
    console.log(`name: ${name}, value: ${value}`);
    setInput({ ...input, [name]: value });
    console.log(input);
    props.handleSearchInput(input); // Raise the input object to the parent component
  };

  const handleSubmit = () => {
    console.log("Submit loan calculator info ");
    props.handleOnSubmit();
  };
  return (
    <section className="search">
      <form className="search-form search-calculator">
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-input"
            type="text"
            name="loanAmount"
            placeholder="Loan Amount (SGD)"
          ></input>
        </div>
        <br></br>
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="interestRate"
            placeholder="Interest Rate (%)"
          ></input>
        </div>
        <br></br>
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="durationYears"
            placeholder="Loan Duration (Years)"
          ></input>
        </div>
        <br></br>
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </section>
  );
}
