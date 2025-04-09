import React from "react";

function Table(props) {
  return (
    <div>
      <table border={80}  >
        <thead>
          <tr>
            <th rowSpan={2}>Brand</th>
            <th colSpan={2}>Speed Stats</th>
            <th rowSpan={2}>Top Color</th>
          </tr>
          <tr>
            <th>Top Speed</th>
            <th>ZeroToSixty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.hondaModel}</td>
            <td>{props.hondaTopSpeed}</td>
            <td>{props.hondaZeroToSixty}</td>
            <td>{props.hondaTopColour}</td>
          </tr>
          <tr>
            <td>{props.testlaModel}</td>
            <td>{props.testlaTopSpeed}</td>
            <td>{props.testlaZeroToSixty}</td>
            <td>{props.testlaTopColour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
