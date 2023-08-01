import React, { useState, useEffect } from 'react';
import { 
  requestsGet,
  requestsPut, 
} from "../requestsToServer.js";
import { useTable } from 'react-table';
import './tableWithCheckboxes.css'; 

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

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'שם', accessor: 'username' },
      { Header: 'שם מוצר', accessor: 'itemName' },     
      { Header: 'נתרם', accessor: 'checkbox', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isDonated} onChange={() => handleCheckboxClick(row.original)} /> },
      ],
      []
  );

  const handleCheckboxClick = async (Donation) => {
    if(!Donation.isDonated){
      Donation.isDonated = true;
      console.log(Donation);
      await requestsPut(`/${tableName}/${Donation.id}`,Donation);
      const response = await requestsGet(`/`+tableName);
      console.log(response);
      setData(response);
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table className="TableWithCheckboxes" {...getTableProps()} >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}            
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
