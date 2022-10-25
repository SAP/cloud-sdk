import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTable } from 'react-table';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

/**
 * Generates a table from columns layout and data. Binding happens via accesors defined in the columns layout.
 */
export default function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr key={headerGroup.key} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={column.key} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={row.key} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td key={cell.key} {...cell.getCellProps()}>
                    <ReactMarkdown remarkPlugins={[gfm, emoji]}>
                      {cell.value}
                    </ReactMarkdown>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
