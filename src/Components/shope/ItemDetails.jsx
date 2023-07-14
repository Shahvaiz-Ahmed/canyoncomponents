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

<<<<<<< HEAD
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTMzNzAzOCwibmJmIjoxNjg5MzM3MDM4LCJleHAiOjE2ODkzNDA5MzgsImFpbyI6IkUyWmdZTmh3ZmZlclY0R3ZsUnUzRk53OE43ZHpGZ0E9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoidkl3QWdBdjZkVUNQVXZPTVVqQkVBQSIsInZlciI6IjEuMCJ9.on36XHlwYBjJVpMy_OHg0Qdcr2AIApGwmRFqCHCXA4KCVtwGBVoofMP0-HJqTV4a2Psz0zu0zFYeTZgLPFjCHYnZF2weyAa3Jyx3_pcpxEppSGiw8Nk0F7rqqfAtLKNiay7WsIvySjO17Gp54cdCpQYqHEpVe4-X7qviZGC2giKN7FSn0xiSGiQ549Sl07fUUwJ-WA01YLM1eM_Dc90Q8lU6NdZ41BDMDocTeK9TgjvUbbD5808xbxuLKZdRGBbGEEFOsmQo_i5uMjxwjb6v11_Ubv-WDz59lqZUNQGxqpS6vAgN6_FJMPn4KXbsSx2Mt7RKSXt-SagX0Z64ZRgkLg";
const duroScale = "Durometer Scale";

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
=======
>>>>>>> origin/newbranch

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
const {item,setnumberofcecords,size,cs,id,selectedbrand,selectedmaterial,selectedhardness,selectedcolor}=useContext(UserContext);
const filteredProducts = () => {
  if (
    selectedbrand ||
    selectedcolor ||
    selectedhardness ||
    selectedmaterial ||
    cs||id||size
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
useEffect(() => {
  return () => {
    setnumberofcecords(filteredProducts().length)
  }
}, [filteredProducts])


  return (
    <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#182E49",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell style={{ fontSize: "15px", fontWeight: "600" }}>
                      {row.SearchDescription}
                    </TableCell>
                    <TableCell style={{ fontSize: "15px", fontWeight: "600" }}>
                      {row.price ? row.price : "0"}
                    </TableCell>
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={() => handleClick(row.ItemNo)}>
                 <TableCell style={{ fontSize:'15px', fontWeight: '600' }}>{row.SearchDescription}</TableCell>  
                    <TableCell style={{ fontSize:'15px', fontWeight: '600' }}>{row.price ? row.price : "0"}</TableCell>
                    <TableCell
                      style={{
                        backgroundColor: row.qnty ? "green" : "red",
                        color: "#fff",
                      }}
                    >
                      {row.qnty ? "IN STOCK" : "OUT OF STOCK"}
                    </TableCell>
                    <TableCell>{row.Material}</TableCell>
                    <TableCell>{row.Color}</TableCell>
                    <TableCell>{row.Durometer}</TableCell>
                    <TableCell>{row.DurometerScale}</TableCell>
                    <TableCell>{row.CrossSectionalGeometry}</TableCell>
                    <TableCell>{row.SizeStandard}</TableCell>
                    <TableCell>{row.CrossSectionalDiameterCS}</TableCell>
                    <TableCell>{row.InsideDiameterID}</TableCell>
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
