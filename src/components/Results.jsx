
import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Investment (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          return (
            <tr>
              <td>{yearData.year}</td>
              <td>{yearData.valueEndOfYear}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
