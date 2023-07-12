import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const accessToken =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTE2MzU1NywibmJmIjoxNjg5MTYzNTU3LCJleHAiOjE2ODkxNjc0NTcsImFpbyI6IkUyWmdZUGdzcEx6MmsyTWFJL2QyTmc1WjAwWFZBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoia0N1OXhXTGtha2lnbWpGR0lRaEJBQSIsInZlciI6IjEuMCJ9.VzDt7S4BuXzTkPL0p-K24QhOkig6Sk1Z1v8pMLPgOOB-QtmPV4W8295Z_w9Q4PnIWHSgNILP6d-cQDwfNiYhkH92OQIb32vvWKKINQ8GbvtzZCMH0USGs-yON4ylNbPtuKla0CGU2Ad9RmuFjPJ49pweKOWbfJfRc0lYiuE7fJ-isPb4u-CJ9smKZTO_I9ywZd0RFryt1v5wBBTiwpWwRZPNqpif65z7HP75eax8jSjGUxRZiJUczxdAgaFbhAKI8Y9B4xRnHGoukq-FEr7BrXgNaS9dM5TXwO2Nzb2Ow829_R_RCp53qvEsV29gOn11ILgaWdC0ngfRkk_yJ1Zv3g";
//   let previousItemNo = null;
// let productArray = [

// ];
// let currentProduct = null;

let previousItemNo = null;

let productArray = [];

let currentProduct = null;

const columns = [
  { id: "name", label: "Part Number", minWidth: 170 },
  { id: "code", label: "Material", minWidth: 100 },
  {
    id: "population",
    label: "Material ",

    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Hardness",

    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "scale",
    label: "Scale",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Density",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Color",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Density",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Low Temp(C)",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "High Temp (C)",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Type",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Density",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Density",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Density",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Size",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Online",

    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [ItemDetails, setItemDetails] = useState([]);

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
          console.log(productArray)
        })
        .catch((err) => console.log(err));
    };
  }, [ItemDetails]);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 550 }}>
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
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productArray ? (
              productArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.code}>
                      {row.AttributeList.map((column) => {
                        const value = row[column];
                        return (
                          <>
                            <TableCell
                              key={column}
                              align={column.align}
                              style={{ top: 57, minWidth: column.minWidth }}
                            >
                              <TableRow tabIndex={3}>
                                {column.SearchDescription}
                              </TableRow>
                              <TableRow
                                tabIndex={3}
                                style={{
                                  position: "relative",
                                  right: 0,
                                }}
                              >
                                {column.AttributeValue}
                              </TableRow>
                            </TableCell>
                            <TableCell>
                            <TableRow tabIndex={3}>
                                {/* {column.} */}
                              </TableRow>
                            </TableCell>
                          </>
                        );
                      })}
                    </TableRow>
                  );
                })
            ) : (
              <></>
            )}
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
