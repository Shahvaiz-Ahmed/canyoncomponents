import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns = [
  {
    field: 'Partno', headerName: 'Partno',
    width: 140,
    
  
  },
  { field: 'StartingPrice', headerName: 'StartingPrice', width: 50, type: 'number' },
  { field: 'Stock', headerName: 'Stock', width: 100 },
  {
    field: 'Material',
    headerName: 'Material',
    width: 90,
  },
  {
    field: 'Color',
    headerName: 'Color',
    width: 90,
  },

  {
    field: 'Hardness',
    headerName: 'Hardness',
    width: 90,
  },
  {
    field: 'Scale',
    headerName: 'Scale',
    width: 90,
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 90,
  },
  {
    field: 'Size',
    headerName: 'Size',
    width: 90,
  },
  {
    field: 'cs',
    headerName: 'cs',
    width: 90,
  },
  {
    field: 'id',
    headerName: 'id',
    width: 90,
  },
  {
    field: 'Materialdesc',
    headerName: 'Materialdesc',
    width: 90,
  },
  {
    field: 'Heightemp',
    headerName: 'Heightemp',
    width: 90,
  },
  {
    field: 'Lowtemp',
    headerName: 'Lowtemp',
    width: 90,
  },

];


const rows = [
  { Partno: 'jj', StartingPrice: 10.00, Stock: 'OUT OF STOCK', Material: 'PLA', Color: 'Red', Hardness: 90, Scale: 'Shore B', Type: 'Wrist Wear', Size: 'AS568-204', cs: 3.53, id: 9.12, Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA', Heightemp: 320, Lowtemp: -15, },
  { Partno: 'nn', StartingPrice: 120.00, Stock: 'IN STOCK', Material: 'PLA', Color: 'Blue', Hardness: 910, Scale: 'Shore C', Type: 'Wrist Wear', Size: 'AS568-204', cs: 3.53, id: 9.12, Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA', Heightemp: 320, Lowtemp: -15, },
];

const ProductTable = () => {
  return (
    <div style={{ height: 550, width: '87%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[0,5, 7, 8, 9, 10]}
        
      // checkboxSelection
      />
    </div>
  );
};

export default ProductTable;