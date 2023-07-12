import React, { useState, useEffect, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { WrapText } from '@mui/icons-material';
import { UserContext } from "../../UserContext";
import axios from "axios";

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

const rows = [];

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
  {
    field: "Partno",
    headerName: "Part No",
    width: 200,
  },
  {
    field: "StartingPrice",
    headerName: "Starting Price",
    width: 50,
    type: "number",
  },
  { field: "Stock", headerName: "Stock", width: 100 },
  {
    field: "Material",
    headerName: "Material",
  },
  {
    field: "Color",
    headerName: "Color",
  },

  {
    field: "Hardness",
    headerName: "Hardness",
  },
  {
    field: "Scale",
    headerName: "Scale",
  },
  {
    field: "Type",
    headerName: "Type",
  },
  {
    field: "Size",
    headerName: "Size",
  },
  {
    field: "CS",
    headerName: "CS",
  },
  {
    field: "ID",
    headerName: "ID",
  },
  {
    field: "Materialdesc",
    headerName: "Material Description",
  },
  {
    field: "Heightemp",
    headerName: "Heigh Temp",
  },
  {
    field: "Lowtemp",
    headerName: "Low Temp",
  },
];

export default function CustomPaginationActionsTable() {
  const { datax } = React.useContext(UserContext);
  console.log(datax);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTA3MjE4NSwibmJmIjoxNjg5MDcyMTg1LCJleHAiOjE2ODkwNzYwODUsImFpbyI6IkUyWmdZRmhjcnlWKzRjNUcwYi92YnYvTjJXVWhDQUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiWUdZVkZCNDljRWluYldrMDZ3SVJBQSIsInZlciI6IjEuMCJ9.dnNwSmj1U6TMWQi7B2DOipt0yaEEYbBbMO7orZNiL1gsYTwHjwkGQFRDAxsVV14p-fZmHsIopNgN506r6vBsYRNNaGk_DJi_h2BoL6-TmWW1wPiDghugAm7b9_nSH4-Gv1br4bAC2xQfh9_0ZQ4F36-8yXMb6uUpvSM27vEAYB-1LJS1WQVuW_GTEU39gGRzgQdGiLxgNU2SAUw_R3UvCpERxsAaq49LT771DVrsBn4tdFl6eF9p_jWuR9emb8hQHhFs9VXkRrBxjFyv-CnUKcqMGrWqZ_QQ-78huqWXB_TLQBKeAtRZQx-baSxF2svk63FhkhE0CbyIvOx5xd6amA";
  // const [material, setmaterial] = useState()
  const [ItemDetails, setItemDetails] = useState([]);
  const items = ItemDetails;

  const getData = () => {
    console.log("calling it");
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
      })
      .catch((err) => console.log(err));
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(ItemDetails, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, datax]
  );
  let previousItemNo = null; // Keep track of the previous ItemNo

  // Store new objects representing products
  let productArray = [];
  let currentProduct = null; // Track the current product being processed

  items.forEach((item) => {
    const isSameProduct = item.ItemNo === previousItemNo; // Compare with previous ItemNo

    previousItemNo = item.ItemNo; // Update previousItemNo

    if (!isSameProduct) {
      if (currentProduct !== null) {
        // Add the previous product to the productArray

        productArray.push(currentProduct);
      }

      // Create a new object for the current product

      currentProduct = {
        ItemNo: item.ItemNo,

        AttributeList: [],
      };
    }

    // Assign other related attributes to the current product object

    const attribute = {
      Description2: item.Description2,

      SearchDescription: item.SearchDescription,

      ...Object.entries(item)

        .filter(([key, value]) => {
          // Filter for AttributeValue and AttributeName keys

          return (
            key.startsWith("AttributeValue") || key.startsWith("AttributeName")
          );
        })

        .reduce((obj, [key, value]) => {
          if (key.startsWith("AttributeValue")) {
            const index = key.slice(14); // Extract the index from the key

            const attributeNameKey = `AttributeName${index}`; // Create the AttributeName key

            const attributeNameValue = item[`AttributeName${index}`]; // Get the corresponding AttributeName value
            if (value && attributeNameValue){
            obj[attributeNameKey] = attributeNameValue;

            obj[key] = value;
          }
        }

          return obj;
        }, {}),
    };

    currentProduct.AttributeList.push(attribute);
  });

  if (currentProduct !== null) {
    // Add the last product to the productArray

    productArray.push(currentProduct);
  }

  console.log(productArray);
  const attributeNames =
    productArray?.length > 0 &&
    productArray[0]?.AttributeList?.map(
      (attribute) => attribute?.AttributeName
    );
  function EnhancedTableHead() {
    console.log(attributeNames);
    // const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    //   props;
    // const createSortHandler = (property) => (event) => {
    //   onRequestSort(event, property);
    // };

    return (
      <TableHead>
        <TableRow>
          {attributeNames?.length > 0 &&
            attributeNames.map((headCell) => (
              <TableCell
                style={{
                  backgroundColor: "#182E49",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                key={headCell}
                // align={headCell.}
                // padding={headCell.disablePadding ? 'none' : 'normal'}
                // sortDirection={orderBy === headCell.id ? order : false}
              >
                {headCell}
              </TableCell>
            ))}
        </TableRow>
      </TableHead>
    );
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Scrollbars style={{ width: "71.2%", height: "100vh" }}>
        <Box sx={{ width: "120vw" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <Table
                stickyHeader
                aria-label="sticky table"
                aria-labelledby="tableTitle"
              >
                <EnhancedTableHead />
                <TableBody>
                  {productArray?.length > 0 &&
                    productArray?.map((product, index) => (
                      <TableRow key={product.ItemNo}>
                        {/* <TableCell>{product.ItemNo}</TableCell>  */}
                        {product?.AttributeList?.map((data) => (
                          <TableCell key={data?.AttributeName}>
                            {''}
                            {data?.AttributeValue}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Scrollbars>
    </>
  );
}
