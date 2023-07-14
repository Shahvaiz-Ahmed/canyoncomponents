import { useEffect, useState } from "react";
import React from "react";
import Paper from "@mui/material/Paper";
import {Link,useNavigate} from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { UserContext } from "../../UserContext";
import { useContext } from "react";


// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

const columns = [

  

  { id: "name", label: "Part Number", minWidth: 130 },

  { id: "code", label: "Starting Price", minWidth: 30 },

  {
    id: "population",

    label: "Stock",

    minWidth: 60,

    align: "left",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "size",

    label: "Material",

    minWidth: 90,

    align: "left",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "density",

    label: "Color",

    minWidth: 30,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "hardness",

    label: "Hardness",

    minWidth: 30,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "scale",

    label: "Scale",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Type",

    label: "Type",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Size",

    label: "Size",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "CS",

    label: "CS",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "ID",

    label: "ID",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Material Description",

    label: "Material Description",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "High Temp(C)",

    label: "High Temp(C)",

    minWidth: 30,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Low Temp(C)",

    label: "Low Temp (C)",

    minWidth: 60,

    align: "left",

    format: (value) => value.toFixed(2),
  },
];




export default function ItemDetails() {


const navigate = useNavigate();
const [page, setPage] = React.useState(0);

const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  
  setPage(0);
};
const handleClick = (data)=>{
  navigate(`/product/${data}`);
}
const {item,size,cs,id,selectedbrand,selectedmaterial,selectedhardness,selectedcolor}=useContext(UserContext);
const filteredProducts = () => {
  if (
    selectedbrand ||
    selectedcolor ||
    selectedhardness ||
    selectedmaterial 
    // cs||id||size
  ) {
    return item?.filter((product) =>
      product.Brand?.includes(selectedbrand) &&
     
      product.Color?.includes(selectedcolor) &&
      product.Durometer?.includes(selectedhardness) &&
      product.Material?.includes(selectedmaterial)
    ) || [];
  }
  return item;
};

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'#182E49', color:'#fff', fontSize:'16px', fontWeight: '600' }}
                 
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
           
           
              {filteredProducts?filteredProducts().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={() => handleClick(row.ItemNo)}>
                 <TableCell style={{ fontSize:'15px', fontWeight: '600' }}>{row.SearchDescription}</TableCell>  
                    <TableCell style={{ fontSize:'15px', fontWeight: '600' }}>{row.price ? row.price : "0"}</TableCell>
                    <TableCell
                      style={{
                        backgroundColor: row.qnty ? "green" : "red",
                      }}
                    >
                      {row.qnty ? "IN STOCK" : "OUT OF STOCK"}
                    </TableCell>
                    <TableCell>{row.Material}</TableCell>
                    <TableCell>{row.Color}</TableCell>
                    <TableCell>{row.Durometer}</TableCell>
                    <TableCell>{row.DurometerScale}</TableCell>
                    <TableCell>{row.MaterialSubtype}</TableCell>
                    <TableCell>{row.SizeStandard}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.HighTemperatureC}</TableCell>
                    <TableCell>{row.LowTemperatureC}</TableCell>
                  </TableRow>
                );
              }):<></>}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={item?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
