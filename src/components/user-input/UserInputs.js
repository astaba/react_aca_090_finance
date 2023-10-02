import React, { useState } from "react";
import Input from "./Input";
import classes from "./UserInputs.module.css";

const INITIAL_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 5,
  duration: 15,
};

export default function UserInputs({ onCalculate }) {
  const [inputData, setInputData] = useState(INITIAL_INPUT);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(inputData);
  }
  const handleReset = () => {
    setInputData(INITIAL_INPUT)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData((prevInput) => ({
      ...prevInput,
      [id]: +value,
    }))
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes["input-group"]}>
        <Input
          id={"current-savings"}
          label={"Current Savings ($)"}
          enteredValue={inputData["current-savings"]}
          handleChange={handleChange}
        />
        <Input
          id={"yearly-contribution"}
          label={"Yearly Savings ($)"}
          enteredValue={inputData["yearly-contribution"]}
          handleChange={handleChange}
        />
      </div>
      <div className={classes["input-group"]}>
        <Input
          id={"expected-return"}
          label={"Expected Interest (%, per year)"}
          enteredValue={inputData["expected-return"]}
          handleChange={handleChange}
        />
        <Input
          id={"duration"}
          label={"Investment Duration (years)"}
          enteredValue={inputData.duration}
          handleChange={handleChange}
        />
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
