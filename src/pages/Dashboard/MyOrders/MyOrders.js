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

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const deleteOrder = (id) => {
    alert("Are You sure you want to delete this?");
    const url = `https://ancient-sands-65869.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted Successfully");
          const remain = orders.filter((order) => order._id !== id);
          setOrders(remain);
        }
      });
  };
  useEffect(() => {
    const url = `https://ancient-sands-65869.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user?.email);
        setOrders(myOrders);
      });
  });
  return (
    <div>
      <h2 style={{ color: "#24C7AC" }}>My Orders: {orders?.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">OrderId</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.brand}
                </TableCell>
                <TableCell align="right">{order.type}</TableCell>
                <TableCell align="right">{order._id}</TableCell>
                <TableCell align="right">{order.status}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => deleteOrder(order._id)}
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

export default MyOrders;
