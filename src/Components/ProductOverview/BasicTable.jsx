import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

function createData(AvailableQuantity, LeadTimeToShip) {
  return { AvailableQuantity, LeadTimeToShip };
}

const rows = [
  createData('342,435', <VerifiedRoundedIcon style={{
    color: 'rgb(39, 255, 39)'
  }} /> ),
  createData('1234,5444', '3-7 days'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ minWidth: 400, maxWidth: 500 }}>
      <Table sx={{ minWidth: 400, maxWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Available Quantity</TableCell>
            <TableCell align="right">Lead Time to Ship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.AvailableQuantity}
              </TableCell>
              <TableCell align="right">{row.LeadTimeToShip}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}