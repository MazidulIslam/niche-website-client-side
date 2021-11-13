import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://ancient-sands-65869.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user?.email);
        setOrders(myOrders);
      });
  });

  const { user, admin } = useAuth();
  let isAdmin = "";
  if (admin === true) {
    isAdmin = "You are admin";
  } else {
    isAdmin = "You are not admin";
  }
  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={4} sx={{ mt: 10, border: 1 }}>
          <Typography variant="h4">Name: {user?.displayName}</Typography>
          <Typography variant="h5">Email: {user?.email}</Typography>
          <Typography variant="h5">Phone: {user?.phone}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 10, border: 1 }}>
          <Typography variant="h4"> My Orders: {orders?.length}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 10, border: 1 }}>
          <Typography variant="h3" style={{ color: "green" }}>
            {" "}
            {isAdmin}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHome;
