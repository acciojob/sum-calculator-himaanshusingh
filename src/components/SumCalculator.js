import React, { useState } from "react";

const SumCalculator = () => {
  let [sum, setSum] = useState(0);

  function handleInput(evt) {
    let num = evt.target.value;
    sum += +num;
    setSum(sum);
  }

  return (
    <>
      <h2>Sum Calculator</h2>
      <input type="number" onChange={handleInput}></input>
      <p>Sum: {sum}</p>
    </>
  );
};

export default SumCalculator;
