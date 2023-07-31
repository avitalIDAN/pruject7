import React, { useState, useEffect } from 'react';
import { 
  requestsGet,
  requestsPut, 
} from "../requestsToServer.js";
import { useTable } from 'react-table';

const tableName = 'donation';

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
      { Header: 'שם מוצר', accessor: 'itemName' },     
      { Header: 'הושאל', accessor: 'checkbox', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isDonated} onChange={() => handleCheckboxClick(row.original)} /> },
      ],
      []
  );

  const handleCheckboxClick = async (Donation) => {
    if(!Donation.isDonated){
      Donation.isDonated = true;
      console.log(Donation);
      //requestsPut();
      await requestsPut(`/${tableName}/${Donation.id}`,Donation);
      const response = await requestsGet(`/`+tableName);
      console.log(response);
      setData(response);
      //add Donation
    }
    //d.toDateString();
    //עדכון
    //תאריך*2
    //console.log(`Checkbox ${checkboxNumber} for ID ${id} clicked.`);
    // Add your custom logic here, based on the checkbox click
  };

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
