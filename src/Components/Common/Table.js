import React from "react";
import "./styles.css";

const Table = ({ columns = [], data = [], onRowClick = () => {} }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} onClick={() => onRowClick(row)}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {typeof column.accessor === "function"
                  ? column.accessor(row)
                  : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
