import { useState } from "react";

import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue, // ensures numeric state
    }));
  }

  return (
    <>
      <UserInput userinput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
