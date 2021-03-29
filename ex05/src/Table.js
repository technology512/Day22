// src/Table.js

import React, { Component } from "react";

// Add TableHeader arrow function here

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
  );
};

// Add TableBody arrow function here

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Lary</td>
        <td>Page</td>
      </tr>
      <tr>
        <td>Ada</td>
        <td>Lovelace</td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Turing</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}
export default Table;
