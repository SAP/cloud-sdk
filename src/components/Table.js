import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTable, tableFeatures, flexRender } from '@tanstack/react-table';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

const features = tableFeatures({});

export default function Table({ columns, data }) {
  const { getHeaderGroups, getRowModel } = useTable({
    features,
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table>
      <thead>
        {getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} colSpan={header.colSpan}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map(row => {
          return (
            <tr key={row.id}>
              {row.getAllCells().map(cell => {
                return (
                  <td key={cell.id}>
                    <ReactMarkdown remarkPlugins={[gfm, emoji]}>
                      {cell.getValue()}
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
