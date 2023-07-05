import React from "react";

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultTable({ results, initialInvestment }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>
              {formatter.format(
                item.savingsEndOfYear -
                  item.year * item.yearlyContribution -
                  initialInvestment
              )}
            </td>
            <td>
              {formatter.format(
                item.year * item.yearlyContribution + initialInvestment
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
