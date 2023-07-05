import React from "react";

export default function Input({
  id,
  label,
  enteredValue,
  handleChange,
  type = "number",
}) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={enteredValue} onChange={handleChange} />
    </p>
  );
}
