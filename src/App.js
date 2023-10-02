import React, { useState } from "react";
import Header from "./components/header/Header";
import UserInputs from "./components/user-input/UserInputs";
import ResultTable from "./components/result-table/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const handleCalculate = (liftedUserInput) => {
    setUserInput(liftedUserInput);
  };
  // create a "derived state":
  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  // console.log("App =>", yearlyData);

  return (
    <div>
      <Header />
      <UserInputs onCalculate={handleCalculate} />
      {!userInput ? (
        <p className="no-data">No investment data yet.</p>
      ) : (
        <ResultTable
          results={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
