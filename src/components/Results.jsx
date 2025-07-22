import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input}) {
  const resultsData = calculateInvestmentResults(input);
  let totalInterest = 0;
  
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          totalInterest += yearData.interest;
          const investedCapital =
            (yearData.investedCapital || 0) +
            yearData.annualInvestment * (yearData.year - 1); // Corrected formula
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(yearData.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
