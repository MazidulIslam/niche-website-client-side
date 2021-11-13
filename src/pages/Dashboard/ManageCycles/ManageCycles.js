import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageCycles = () => {
  const { user } = useAuth();
  const [cycles, setCycles] = useState([]);

  const deleteOrder = (id) => {
    alert("Are You sure you want to delete this?");
    const url = `https://ancient-sands-65869.herokuapp.com/cycles/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted Successfully");
          const remain = cycles.filter((cycle) => cycle._id !== id);
          setCycles(remain);
        }
      });
  };

  useEffect(() => {
    const url = `https://ancient-sands-65869.herokuapp.com/cycles`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCycles(data);
      });
  }, [user?.email, cycles]);
  return (
    <div>
      <h2 style={{ color: "#24C7AC" }}>Manage All Cycles: {cycles?.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Cycle Id</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cycles?.map((cycle) => (
              <TableRow
                key={cycle._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cycle.brand}
                </TableCell>
                <TableCell align="right">{cycle.type}</TableCell>
                <TableCell align="right">{cycle._id}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => deleteOrder(cycle._id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageCycles;
