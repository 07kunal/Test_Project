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

const TableBox = styled.div`
  padding: 24px;
  background-color: #eee;
  border: 1px dashed #263238;
  border-radius: 2px;
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
            defaultValue={value}
            onChange={(e) => {
              const { rowIndex } = tableMeta;
              const modifiedValue = e.target.value;
              updateValue(modifiedValue);
              handleRowDataUpdate(rowIndex, {
                payCodeType: modifiedValue,
              });
            }}
          >
            <MenuItem value="" disabled>
              Select
            </MenuItem>
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
            defaultChecked={value}
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
            defaultChecked={value}
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
      setCellHeaderProps: () => {
        return {
          padding: "checkbox",
        };
      },
      customBodyRender: (value, tableMeta, updateValue) => {
        const { rowIndex } = tableMeta;
        return (
          <IconButton onClick={() => handleRowDelete(rowIndex)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  },
];

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
          padding: "8px",
          minWidth: "100%",
        },
        head: {
          background: "#e0e0e0",
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

const PayCodeMappingGrid = (props) => {
  const { data = initialData } = props;

  const [tableData, setTableData] = React.useState([...data]);

  // console.log(data)

  const handleAddNewRow = React.useCallback(() => {
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
  }, []);

  const handleDeleteRow = React.useCallback((rowIndex) => {
    console.log(rowIndex,"tabledata",tableData)
    const newList = tableData.filter((value, index) => index !== rowIndex);
    //changes
    // setTableData((prevData) => {
    //   // prevData.splice(rowIndex, 1);
    //   // // return [...prevData];
    //   // return [...prevData?.map((data)=>({...data}))];

    // });
    console.log(newList)
    setTableData(newList);
  }, []);

  const handleRowDataUpdate = React.useCallback((rowIndex, updatedRowData) => {
    setTableData((prevData) => {
      prevData[rowIndex] = { ...prevData[rowIndex], ...updatedRowData };
      return prevData;
    });
  }, []);

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
    onRowsDelete(rowsDeleted) {
      const { lookup } = rowsDeleted;
      console.log(lookup, "lookup", rowsDeleted);
      setTableData((prevData) => {
        return prevData.filter((row, index) => {
          console.log(row, "row");
          // console.log(lookup[index],"prevData")
          // return !lookup[index];
          return rowsDeleted?.data[0]?.index !== index;
        });
      });
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

export default PayCodeMappingGrid;
