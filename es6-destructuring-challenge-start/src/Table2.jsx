import "./App.css";
import cars from "./practice";

function Table2() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th rowSpan="2">Brand</th>
          <th colSpan="2">Speed Stats</th>
          <th rowSpan="2">Top Colour</th>
        </tr>
        <tr>
          <th>Top Speed</th>
          <th>Zero to Sixty</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(
          ({
            model,
            speedStats: { topSpeed, zeroToSixty },
            coloursByPopularity,
          }) => (
            <tr key={model}>
              <td>{model}</td>
              <td>{topSpeed} mph</td>
              <td>{zeroToSixty} sec</td>
              <td>{coloursByPopularity[0]}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default Table2;
