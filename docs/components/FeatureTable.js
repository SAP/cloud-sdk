import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTable } from 'react-table';
import { features } from './data/features';
import { mainFeatureTableLayout } from './data/table-layouts';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    <ReactMarkdown plugins={[gfm, emoji]}>
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

export default function FeatureTable() {
  const data = React.useMemo(() => features, []);
  const columns = React.useMemo(() => mainFeatureTableLayout, []);

  return (
    <>
      <ReactMarkdown plugins={[gfm, emoji]}>
        **Legend:** :heavy_check_mark: - Generally Available, :x: - Not
        Available, :bulb: - Beta, :gear: - Planned
      </ReactMarkdown>
      <Table columns={columns} data={data} />
    </>
  );
}
