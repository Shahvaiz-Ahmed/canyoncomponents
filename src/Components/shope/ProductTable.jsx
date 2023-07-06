import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Partno', headerName: 'Partno', width: 140 },
  { field: 'StartingPrice', headerName: 'StartingPrice', width: 50, type: 'number' },
  { field: 'Stock', headerName: 'Stock', width: 100 },
  { field: 'Material', headerName: 'Material', width: 90 },
  { field: 'Color', headerName: 'Color', width: 90 },
  { field: 'Hardness', headerName: 'Hardness', width: 90 },
  { field: 'Scale', headerName: 'Scale', width: 90 },
  { field: 'Type', headerName: 'Type', width: 90 },
  { field: 'Size', headerName: 'Size', width: 90 },
  { field: 'cs', headerName: 'cs', width: 90 },
  { field: 'id', headerName: 'id', width: 90 },
  { field: 'Materialdesc', headerName: 'Materialdesc', width: 90 },
  { field: 'Heightemp', headerName: 'Heightemp', width: 90 },
  { field: 'Lowtemp', headerName: 'Lowtemp', width: 90 },
];

const rows = [
  {
    id: 1,
    Partno: 'jj',
    StartingPrice: 10.00,
    Stock: 'OUT OF STOCK',
    Material: 'PLA',
    Color: 'Red',
    Hardness: 90,
    Scale: 'Shore B',
    Type: 'Wrist Wear',
    Size: 'AS568-204',
    cs: 3.53,
    Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA',
    Heightemp: 320,
    Lowtemp: -15,
  },
  {
    id: 2,
    Partno: 'nn',
    StartingPrice: 120.00,
    Stock: 'IN STOCK',
    Material: 'PLA',
    Color: 'Blue',
    Hardness: 910,
    Scale: 'Shore C',
    Type: 'Wrist Wear',
    Size: 'AS568-204',
    cs: 3.53,
    Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA',
    Heightemp: 320,
    Lowtemp: -15,
  },
];

const ProductTable = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearch} placeholder="Search" />
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={8}
        />
      </div>
    </div>
  );
};

export default ProductTable;
