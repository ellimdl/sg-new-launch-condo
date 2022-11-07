import React from "react";
import LoanSearch from "../components/LoanSearch";
import LoanResults from "../components/LoanResults";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [query, setQuery] = useState({
    loanAmount: "",
    interestRate: "",
    durationYears: "",
  });
  const [calculatorOutput, setCalculatorOutput] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchInput = (input) => {
    setHasSearched(true);
    setQuery(input);
    console.log(`query: `, input);
  };

  useEffect(() => {
    const onSubmitQuery = async (query) => {
      const NinjaUrl = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${query.loanAmount}&interest_rate=${query.interestRate}&duration_years=${query.durationYears}`;
      const authToken = process.env.REACT_APP_NINJA_API_KEY;
      try {
        console.log(`onSubmitQuery is executed. Query: `, query);
        const res = await fetch(NinjaUrl, {
          method: "GET",
          headers: {
            "X-Api-Key": authToken,
          },
        });
        const json = await res.json();
        console.log("NinjaLoanJson: ", json);
        setCalculatorOutput(json);
      } catch {
        console.log(`API error`);
      }
    };
    onSubmitQuery(query);
  }, [query]);

  const onSearchAgain = () => {
    setHasSearched(false);
    setCalculatorOutput({});
  };

  return (
    <section className="section about-section">
      <h1 className="section-title">home loan calculator</h1>
      {hasSearched ? (
        <LoanResults
          onSearchAgain={onSearchAgain}
          calculatorOutput={calculatorOutput}
        />
      ) : (
        <LoanSearch handleSearchInput={handleSearchInput} />
      )}
    </section>
  );
}
