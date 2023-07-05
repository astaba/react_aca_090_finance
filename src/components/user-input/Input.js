import React from "react";

export default function Input({ id, label, handleChange, type = "number" }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={handleChange} />
    </p>
  );
}
