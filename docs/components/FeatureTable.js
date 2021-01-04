import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTable } from 'react-table';
import { features } from './data/features';
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

function FeatureTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Feature',
        columns: [
          // {
          //   Header: 'Category'
          //   accessor: 'cat',
          // },
          {
            Header: 'Name',
            accessor: 'name'
          }
        ]
      },
      {
        Header: 'SAP Cloud SDK Java',
        columns: [
          {
            Header: 'Status',
            accessor: 'java.status'
          },
          {
            Header: 'Docs',
            accessor: 'java.docsLink'
          },
          {
            Header: 'Notes',
            accessor: 'java.note'
          }
        ]
      },
      {
        Header: 'SAP Cloud SDK JavaScript',
        columns: [
          {
            Header: 'Status',
            accessor: 'js.status'
          },
          {
            Header: 'Docs',
            accessor: 'js.docsLink'
          },
          {
            Header: 'Notes',
            accessor: 'js.note'
          }
        ]
      }
    ],
    []
  );

  const data = React.useMemo(() => features, []);

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

export default FeatureTable;
