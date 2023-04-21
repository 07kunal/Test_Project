import React from "react"
import TableFooter from "@mui/material/TableFooter"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"

const AddRowFooter = props => {
  const { onAddClick } = props

  return (
    <TableFooter sx={{ borderTop: "1px solid #e0e0e0" }}>
      <TableRow>
        <TableCell colSpan={6}>
          <IconButton onClick={onAddClick} color="primary" aria-label="add row">
            <AddIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}

export default AddRowFooter
