import React from 'react';
import { useTable } from 'react-table';

const TableWithCheckboxes = () => {
  // Sample data for demonstration
  const data = React.useMemo(
    () => [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 },
      // Add more rows as needed
    ],
    []
  );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'שם', accessor: 'username' },
    //   { Header: 'שם מוצר', accessor: 'price' },
      { Header: 'סוג מוצר', accessor: 'price' },
      { Header: 'תאריך החזרה', accessor: 'date' },
    ],
    []
  );

  // Add checkboxes to the columns array for the last two columns
  columns.push(
    { Header: 'Checkbox 1', accessor: 'הושאל', Cell: ({ row }) => <input type="checkbox" /> },
    { Header: 'Checkbox 2', accessor: 'הוחזר', Cell: ({ row }) => <input type="checkbox" /> }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableWithCheckboxes;
