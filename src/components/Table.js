import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  useReactTable,
  flexRender,
  getCoreRowModel
} from '@tanstack/react-table';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

/**
 * Generates a table from columns layout and data. Binding happens via accesors defined in the columns layout.
 */
export default function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build UI
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
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
                  header.column.columnDef.Header,
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
