import React, { useState, useEffect } from 'react';
import { 
  requestsGet,
  requestsPut, 
} from "../requestsToServer.js";
import { useTable } from 'react-table';

const tableName = 'lending';

const TableWithCheckboxes = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await requestsGet(`/`+tableName);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // Sample data for demonstration
  // const data = React.useMemo(
  //   () => fetchData(),
  //   []
  // );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'שם', accessor: 'username' },
    //   { Header: 'שם מוצר', accessor: 'price' },
      { Header: 'סוג מוצר', accessor: 'tableName' },
      { Header: 'תאריך השאלה', accessor: 'dateLending' },
      { Header: 'תאריך החזרה', accessor: 'dateReturn' },      
      { Header: 'הושאל', accessor: 'checkbox1', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isReturn} onChange={() => handleCheckbox1Click(row.original)} /> },
      { Header: 'הוחזר', accessor: 'checkbox2', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isLending} onChange={() => handleCheckbox2Click(row.original)} /> }
      ],
      []
  );

  const handleCheckbox1Click = async (Lending) => {
    const dateLending = new Date();
    Lending.dateLending = dateLending.toDateString();
    dateLending.setDate(dateLending.getDate() + 7);
    Lending.dateReturn = dateLending.toDateString();
    Lending.isLending = true;
    console.log(Lending);
    //requestsPut();
    const response = await requestsPut(`/${tableName}/${Lending.id}`,Lending);
    //d.toDateString();
    //עדכון
    //תאריך*2
    //console.log(`Checkbox ${checkboxNumber} for ID ${id} clicked.`);
    // Add your custom logic here, based on the checkbox click
  };
  const handleCheckbox2Click = async (Lending) => {
    Lending.isLending = true;
    console.log(Lending);
    //requestsPut();
    const response = await requestsPut(`/${tableName}/${Lending.id}`,Lending);
    //עדכון
    //כמות
    //console.log(`Checkbox ${checkboxNumber} for ID ${id} clicked.`);
    // Add your custom logic here, based on the checkbox click
  };

  // Add checkboxes to the columns array for the last two columns
  // columns.push(
  //   { Header: 'Checkbox 1', accessor: 'הושאל', Cell: ({ row }) => <input type="checkbox" /> },
  //   { Header: 'Checkbox 2', accessor: 'הוחזר', Cell: ({ row }) => <input type="checkbox" /> }
  // );

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
