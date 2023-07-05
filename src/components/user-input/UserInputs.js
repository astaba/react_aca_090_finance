import React from "react";
import Input from "./Input";

export default function UserInputS() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...
    console.log("SUBMIT");
  }
  const handleReset = () => {
    // ...
    console.log("RESET");
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <Input
          id={"current-savings"}
          label={"Current Savings ($)"}
          handleChange={handleChange}
        />
        <Input
          id={"yearly-contribution"}
          label={"Yearly Savings ($)"}
          handleChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          id={"expected-return"}
          label={"Expected Interest (%, per year)"}
          handleChange={handleChange}
        />
        <Input
          id={"duration"}
          label={"Investment Duration (years)"}
          handleChange={handleChange}
        />
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
