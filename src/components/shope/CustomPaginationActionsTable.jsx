import * as React from 'react';
import {Scrollbars} from 'react-custom-scrollbars'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { WrapText } from '@mui/icons-material';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Donut', 452, 25.0, 51, 4.9),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  // createData('Honeycomb', 408, 3.2, 87, 6.5),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Jelly Bean', 375, 0.0, 94, 0.0),
  // createData('KitKat', 518, 26.0, 65, 7.0),
  // createData('Lollipop', 392, 0.2, 98, 0.0),
  // createData('Marshmallow', 318, 0, 81, 2.0),
  // createData('Nougat', 360, 19.0, 9, 37.0),
  // createData('Oreo', 437, 18.0, 63, 4.0),

    { Partno: 'jj', StartingPrice: 10.00, Stock: 'OUT OF STOCK', Material: 'PLA', Color: 'Red', Hardness: 90, Scale: 'Shore B', Type: 'Wrist Wear', Size: 'AS568-204', cs: 3.53, id: 9.12, Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA', Heightemp: 320, Lowtemp: -15, },
    { Partno: 'nn', StartingPrice: 120.00, Stock: 'IN STOCK', Material: 'PLA', Color: 'Blue', Hardness: 910, Scale: 'Shore C', Type: 'Wrist Wear', Size: 'AS568-204', cs: 3.53, id: 9.12, Materialdesc: 'CanRez CP80BK21 FFKM Black FDA USP VI 87 88 AED NACE Ultra Steam 8OA', Heightemp: 320, Lowtemp: -15, },
  ];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const columns = [
  {
    field: 'Partno', headerName: 'Part No',
    width:200,
 
    
  
  },
  { field: 'StartingPrice', headerName: 'Starting Price', width: 50, type: 'number' },
  { field: 'Stock', headerName: 'Stock', width: 100 },
  {
    field: 'Material',
    headerName: 'Material',
    
  },
  {
    field: 'Color',
    headerName: 'Color',
    
  },

  {
    field: 'Hardness',
    headerName: 'Hardness',
   
  },
  {
    field: 'Scale',
    headerName: 'Scale',
 
  },
  {
    field: 'Type',
    headerName: 'Type',
 
  },
  {
    field: 'Size',
    headerName: 'Size',

  },
  {
    field: 'cs',
    headerName: 'cs',
   
  },
  {
    field: 'id',
    headerName: 'id',
 
  },
  {
    field: 'Materialdesc',
    headerName: 'Material Desc',
  
  },
  {
    field: 'Heightemp',
    headerName: 'Heigh Temp',
    
  },
  {
    field: 'Lowtemp',
    headerName: 'Low Temp',
   
  },

];


function EnhancedTableHead() {
  // const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
  //   props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
 
    <TableHead>
          
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
          style={{ backgroundColor: '#182E49', color:'#fff' ,fontWeight: 'bold', fontSize: '18px' }}
            key={headCell.field}
          
            align={headCell.align}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
         
              {headCell.headerName}
              
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export default function CustomPaginationActionsTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (

  <>
      <Scrollbars style={{ width: '67%', height: '100vh' }}>
    
      <Box sx={{ width: '120%' }}>
        <Paper sx={{ width: '100%', mb: 2, }}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer>
            <Table
              stickyHeader aria-label="sticky table"
              // sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead />
              <TableBody>
                {visibleRows.map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  // const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-5}
                      key={row.name}
                      // selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >

                      <TableCell

                      >
                        {row.Partno}
                      </TableCell>
                      <TableCell align="baseline">{row.StartingPrice}</TableCell>
                      <TableCell align="baseline" style={{ backgroundColor: row.Stock === 'IN STOCK' ? 'green' : 'red' }}>{row.Stock} </TableCell>
                      <TableCell align="baseline">{row.Material}</TableCell>
                      <TableCell align="baseline">{row.Color}</TableCell>
                      <TableCell align="baseline">{row.Hardness}</TableCell>
                      <TableCell align="baseline">{row.Scale}</TableCell>
                      <TableCell align="baseline">{row.Type}</TableCell>

                      <TableCell align="baseline">{row.Size}</TableCell>
                      <TableCell align="baseline">{row.cs}</TableCell>
                      <TableCell align="baseline">{row.id}</TableCell>
                      <TableCell align="baseline">{row.Materialdesc}</TableCell>

                      <TableCell align="baseline">{row.Heightemp}</TableCell>
                      <TableCell align="baseline">{row.Lowtemp}</TableCell>
                    </TableRow>
                  );
                })}
                {/* {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
           rowsPerPageOptions={[5, 8, 10]}
           component="div"
           count={rows.length}
           rowsPerPage={rowsPerPage}
           page={page}
           onPageChange={handleChangePage}
           onRowsPerPageChange={handleChangeRowsPerPage}/>
         
        </Paper>
      </Box>
      </Scrollbars>
</>
   
  );
}