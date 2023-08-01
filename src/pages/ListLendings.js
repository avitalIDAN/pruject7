import React, { useState, useEffect } from 'react';
import { 
  requestsGet,
  requestsPut, 
} from "../requestsToServer.js";
import { useTable } from 'react-table';
import './tableWithCheckboxes.css'; 

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


  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'שם', accessor: 'username' },
      { Header: 'שם מוצר', accessor: 'itemName' },
      { Header: 'תאריך השאלה', accessor: 'dateLending' },
      { Header: 'תאריך החזרה', accessor: 'dateReturn' },      
      { Header: 'הושאל', accessor: 'checkbox1', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isLending} onChange={() => handleCheckbox1Click(row.original)} /> },
      { Header: 'הוחזר', accessor: 'checkbox2', 
      Cell: ({ row }) => <input type="checkbox" checked={row.original.isReturn} onChange={() => handleCheckbox2Click(row.original)} /> }
      ],
      []
  );

  const handleCheckbox1Click = async (Lending) => {
    if(!Lending.isLending){
      const dateLending = new Date();
      Lending.dateLending = dateLending.toDateString();
      dateLending.setDate(dateLending.getDate() + 7);
      Lending.dateReturn = dateLending.toDateString();
      Lending.isLending = true;
      console.log(Lending);
      await requestsPut(`/${tableName}/${Lending.id}`,Lending);
      const response = await requestsGet(`/`+tableName);
      console.log(response);
      setData(response);
    }
  }
  const handleCheckbox2Click = async (Lending) => {
    if(!Lending.isReturn){
      Lending.isReturn = true;
      console.log(Lending);
      //requestsPut();
      await requestsPut(`/${tableName}/${Lending.id}`,Lending);
      const response = await requestsGet(`/${Lending.tableName}?id=${Lending.itemId}`);
      console.log(response[0]);
      const updatedData= {...response[0], quantityAvailable: response[0].quantityAvailable+1};
      console.log(updatedData);
      // Perform a PUT request to update the quantityAvailable in the database
      await requestsPut(`/${Lending.tableName}/${Lending.itemId}`,updatedData);
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table className="TableWithCheckboxes" {...getTableProps()}>
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
