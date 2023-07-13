import { useEffect, useState } from "react";

import React from "react";

import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";

import TableCell from "@mui/material/TableCell";

import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";

import TablePagination from "@mui/material/TablePagination";

import TableRow from "@mui/material/TableRow";

import { UserContext } from "../../UserContext";

import axios from "axios";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTI0NDYzNiwibmJmIjoxNjg5MjQ0NjM2LCJleHAiOjE2ODkyNDg1MzYsImFpbyI6IkUyWmdZREI4eUhwZDQ3eEc5S3UzSlQvTWRwMThBZ0E9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoidm9RcmRFcmFCa2k2ZW1WVXBRazhBQSIsInZlciI6IjEuMCJ9.NXevIMFHqlhpXm0qYcuPzD6DXgiyA03l6aj78emNhpKn05aYynXTKUHERPHNz1iDAZ35wRUSdVM5wLSHDinTs1BU15qDYSr4q0O5ZV79QxDzH1kSW0JQocI8UT8S_blBEP6L-n1gZDf_dmKJqVCrJOu_2JEH84VgaXPvPy9hUtxFahvobod45-g4e5TSPKJ9YgWL_DvkmPXUqM1mAC1WuFEhKqbnFnrYsc35jGLK5XOnoAfaJAo3rkzrSDP3KOri4HEEA2KMD7UMW1mLBUkF_iEjFfJqsaxfr82AJ5j11cet6wPtGIXO9X9X-5CQBroESoKvUcJtyYD8IslLrCJbSg";

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
  { id: "name", label: "Part No", minWidth: 170 },

  { id: "code", label: "Starting Price", minWidth: 100 },

  {
    id: "population",

    label: "STOCK",

    minWidth: 170,

    align: "left",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "size",

    label: "Material",

    minWidth: 170,

    align: "left",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "density",

    label: "Color",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "hardness",

    label: "Hardness",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "scale",

    label: "scale",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Type",

    label: "Type",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Size",

    label: "Size",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "CS(mm)",

    label: "CS(mm)",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "ID(mm)",

    label: "ID(mm)",

    minWidth: 170,

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

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },

  {
    id: "Low Temp(C)",

    label: "Low Temp(C)",

    minWidth: 170,

    align: "left",

    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;

  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),

  createData("China", "CN", 1403500365, 9596961),

  createData("Italy", "IT", 60483973, 301340),

  createData("United States", "US", 327167434, 9833520),

  createData("Canada", "CA", 37602103, 9984670),

  createData("Australia", "AU", 25475400, 7692024),

  createData("Germany", "DE", 83019200, 357578),

  createData("Ireland", "IE", 4857000, 70273),

  createData("Mexico", "MX", 126577691, 1972550),

  createData("Japan", "JP", 126317000, 377973),

  createData("France", "FR", 67022000, 640679),

  createData("United Kingdom", "GB", 67545757, 242495),

  createData("Russia", "RU", 146793744, 17098246),

  createData("Nigeria", "NG", 200962417, 923768),

  createData("Brazil", "BR", 210147125, 8515767),
];

export default function ItemDetails() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const { datax } = React.useContext(UserContext);
  console.log(datax);

  const [ItemDetails, setItemDetails] = useState();

  useEffect(() => {
    return () => {
      axios
        .get(
          "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company('My%20Company')/ItemApi",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.value);
          setItemDetails(res.data.value);

          const items = ItemDetails;

          items.forEach((item) => {
            const isSameProduct = item.ItemNo === previousItemNo;

            previousItemNo = item.ItemNo;

            if (!isSameProduct) {
              if (currentProduct !== null) {
                productArray.push(currentProduct);
              }

              currentProduct = {
                ItemNo: item.ItemNo,

                AttributeList: [],
              };
            }

            const attribute = {
              Description2: item.Description2,
              SearchDescription: item.SearchDescription,
            };

            // Add the Compound Number as a key-value pair to the attribute object

            const compoundNumberKey = item.AttributeName || "Compound Number";

            attribute[compoundNumberKey] = item.AttributeValue;

            currentProduct.AttributeList.push(attribute);
          });

          if (currentProduct !== null) {
            productArray.push(currentProduct);
          }
          console.log(productArray);
        })
        .catch((err) => console.log(err));
    };
  }, []);

  const items = ItemDetails;

  let previousItemNo = null;

  let productArray = [];

  let currentProduct = null;

  items?.forEach((item) => {
    const isSameProduct = item.ItemNo === previousItemNo;

    previousItemNo = item.ItemNo;

    if (!isSameProduct) {
      if (currentProduct !== null) {
        productArray.push(currentProduct);
      }

      currentProduct = {
        ItemNo: item.ItemNo,

        qnty: item.Quantity,

        price: item.UnitCost,

        Description2: item.Description2,

        SearchDescription: item.SearchDescription,
      };
    }

    // Add the Compound Number as a key-value pair to the current product object

    const compoundNumberKey =
      item.AttributeName.replace(/\s/g, "").replace(/[^\w\s]/gi, "") ||
      "CompoundNumber";

    currentProduct[compoundNumberKey] = item.AttributeValue;
  });

  if (currentProduct !== null) {
    productArray.push(currentProduct);
  }

  console.log(productArray);

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);

    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(productArray, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, datax]
  );
  console.log(
    visibleRows.filter(({ LowTemperatureC, HighTemperatureC }) => {
      return (
        LowTemperatureC === datax?.lowtemp &&
        HighTemperatureC === datax?.hightemp
      );
    })
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {console.log(
              "hello",
              visibleRows.filter((location) => {
                if (
                  datax?.search === "" &&
                  datax?.lowtemp === "" &&
                  datax?.hightemp === ""
                ) {
                  return visibleRows;
                } else if (datax?.search === "") {
                  if (datax?.lowtemp === "" && datax?.hightemp === "") {
                    return visibleRows;
                  } else {
                    return (
                      parseFloat(location?.LowTemperatureC) >= datax?.lowtemp &&
                      parseFloat(location?.HighTemperatureC) <= datax?.hightemp
                    );
                  }
                } else {
                  return (
                    location?.Color?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    ) ||
                    location?.Scale?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    ) ||
                    location?.Type?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    )
                  );
                }
              })
            )}
            {productArray
              .filter((location) => {
                if (
                  datax?.search === "" &&
                  datax?.lowtemp === "" &&
                  datax?.hightemp === ""
                ) {
                  return productArray;
                } else if (datax?.search === "") {
                  if (datax?.lowtemp === "" && datax?.hightemp === "") {
                    return productArray;
                  } else {
                    return (
                      parseFloat(location?.LowTemperatureC) >= datax?.lowtemp &&
                      parseFloat(location?.HighTemperatureC) <= datax?.hightemp
                    );
                  }
                } else {
                  return (
                    location?.Color?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    ) ||
                    location?.Scale?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    ) ||
                    location?.Type?.toLowerCase()?.includes(
                      datax?.search?.toLowerCase()
                    )
                  );
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{row.SearchDescription}</TableCell>
                    <TableCell>{row.price ? row.price : "0"}</TableCell>
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
                    <TableCell>{row.CompoundNumber}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.Description2}</TableCell>
                    <TableCell>{row.HighTemperatureC}</TableCell>
                    <TableCell>{row.LowTemperatureC}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
