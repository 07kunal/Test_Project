import React from "react";
import MUIDataTable from "mui-datatables";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddRowFooter from "./AddRowFooter";
import { FormControl, InputLabel } from "@material-ui/core";

const TableBox = styled.div`
  padding: 24px;
  background-color: #fff;
  border: 1px dashed #263238;
  border-radius: 2px;
  // width: 100%
`;

const getColumns = (handleRowDataUpdate, handleRowDelete) => [
  {
    name: "clientPayCode",
    label: "Client Pay Code",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        // console.log(tableMeta);
        return (
          <TextField
            defaultValue={value}
            InputProps={{ disableUnderline: true }}
            placeholder="Client Pay Code"
            variant="standard"
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.value;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                clientPayCode: modifiedValue,
              });
            }}
          />
        );
      },
    },
  },
  {
    name: "ebPayCode",
    label: "EB Pay Code",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        // console.log(value)
        return (
          <TextField
            defaultValue={value}
            InputProps={{ disableUnderline: true }}
            placeholder="Input EB Pay Code"
            variant="standard"
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.value;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                ebPayCode: modifiedValue,
              });
            }}
          />
        );
      },
    },
  },
  {
    name: "payCodeType",
    label: "Pay Code Type",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Select
            fullWidth
            displayEmpty
            size="small"
            // defaultValue={value}
            value={value !== "" ? value : "Select"}
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.value;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                payCodeType: modifiedValue,
              });
            }}
          >
            {/* <MenuItem value="" disabled>
              Select
            </MenuItem> */}
            <MenuItem value="rg">Regular</MenuItem>
            <MenuItem value="ot">Over Time</MenuItem>
            <MenuItem value="dt">Double Time</MenuItem>
          </Select>
        );
      },
    },
  },
  {
    name: "pay",
    label: "Pay",
    options: {
      sort: false,
      setCellHeaderProps: () => {
        return {
          align: "center",
        };
      },
      setCellProps: () => {
        return {
          align: "center",
        };
      },
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Checkbox
            defaultChecked
            value={value}
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.checked;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                pay: modifiedValue,
              });
            }}
          />
        );
      },
    },
  },
  {
    name: "bill",
    label: "Bill",
    options: {
      sort: false,
      setCellHeaderProps: () => {
        return {
          align: "center",
        };
      },
      setCellProps: () => {
        return {
          align: "center",
        };
      },
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Checkbox
            defaultChecked
            value={value}
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.checked;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                bill: modifiedValue,
              });
            }}
          />
        );
      },
    },
  },
  {
    name: "",
    options: {
      sort: false,

      customBodyRender: (value, tableMeta, updateValue) => {
        const { rowIndex, currentTableData } = tableMeta;

        return (
          <IconButton
            onClick={() => {
              console.log(rowIndex, tableMeta, "ct", currentTableData);
              const currentIndex = currentTableData.find((value, i) => {
                return value.index === rowIndex;
              });
              console.log(currentIndex.index);

              // handleRowDelete(currentIndex?.index);
              handleRowDelete(rowIndex);
            }}
            // style={{ padding: "5px" }}
          >
            <DeleteIcon style={{ padding: "12px 50px" }} />
          </IconButton>
        );
      },
    },
  },
];

const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "4px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: "fixed",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12.5px 20px",
          Width: "100%",
        },
        head: {
          background: "red",
          fontSize: "15px !important",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          fontWeight: "bold !important",
        },
        toolButton: {
          fontWeight: "bold !important",
        },
      },
    },
  },
});
const initialData = [
  {
    clientPayCode: "RG",
    ebPayCode: "",
    payCodeType: "",
    pay: true,
    bill: true,
  },
  {
    clientPayCode: "OT",
    ebPayCode: "",
    payCodeType: "",
    pay: true,
    bill: true,
  },
];
const NewPaydata = (props) => {
  const { data = initialData } = props;
  const [tableData, setTableData] = React.useState([...data]);

  const handleAddNewRow = () => {
    setTableData((prevData) => {
      return [
        ...prevData,
        {
          clientPayCode: "",
          ebPayCode: "",
          payCodeType: "",
          pay: false,
          bill: false,
        },
      ];
    });
  };

  const handleDeleteRow = (rowIndex) => {
    // const newList = tableData.filter((value, index) => index !== rowIndex);

    // console.log(newList);
    // setTableData([...newList]);
    //changes

    setTableData((prevData) => {
      debugger;
      prevData.splice(rowIndex, 1);
      // return [...prevData];
      return [...prevData?.map((data) => ({ ...data }))];
    });
  };

  const handleRowDataUpdate = (rowIndex, updatedRowData) => {
    setTableData((prevData) => {
      prevData[rowIndex] = { ...prevData[rowIndex], ...updatedRowData };
      return prevData;
    });
  };

  const options = {
    responsive: "standard",
    customToolbar: undefined,
    tableBodyMaxHeight: "500px",
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: false,
    fixedHeader: true,
    customFooter: () => {
      return <AddRowFooter onAddClick={handleAddNewRow} />;
    },
    onRowsDelete: (rowsDeleted) => {
      console.log(rowsDeleted);
      const { lookup } = rowsDeleted;
      console.log(lookup, "lookup", rowsDeleted);
      setTableData((prevData) => {
        return prevData.filter((row, index) => {
          return !lookup[index];
        });
      });
      return false;
    },
  };
  console.log(tableData, "tabledata");

  return (
    <TableBox>
      <ThemeProvider theme={customTheme}>
        <MUIDataTable
          title=""
          data={tableData}
          columns={getColumns(handleRowDataUpdate, handleDeleteRow)}
          options={options}
        />
      </ThemeProvider>
    </TableBox>
  );
};

export default NewPaydata;
