import React from 'react'

function Table3() {
  return (
    <div>
      <table border={40}>
        <thead>
          <tr>
            <th rowSpan={2}>Car Brand</th>
            <th colSpan={2}>Specifications</th>
            <th rowSpan={2}>Price</th>
          </tr>
          <tr>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toyota</td>
            <td>Corolla</td>
            <td>2022</td>
            <td>$20,000</td>
          </tr>
          <tr>
            <td>Honda</td>
            <td>Civic</td>
            <td>2023</td>
            <td>$22,000</td>
          </tr>
          <tr>
            <td>Ford</td>
            <td>Mustang</td>
            <td>2021</td>
            <td>$30,000</td>
          </tr>
          <tr>
            <td>BMW</td>
            <td>X5</td>
            <td>2023</td>
            <td>$50,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table3;
