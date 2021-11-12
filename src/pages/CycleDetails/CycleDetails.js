import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";
import Navigation from "../Shared/Navigation/Navigation";

const CycleDetails = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    axios.post("http://localhost:7000/orders", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert("Order Placed Successfully");
        reset();
      }
    });
  };

  const { cycleId } = useParams();

  const [cycle, setCycle] = useState([]);
  useEffect(() => {
    const url = `http://localhost:7000/cycles/${cycleId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCycle(data);
      });
  }, [cycleId]);
  return (
    <div>
      <Navigation></Navigation>
      <h1>Place Your Order</h1>
      <Grid
        style={{ width: "90%", margin: "auto", marginBottom: "80px" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid sx={{ mt: 5 }} item xs={12} md={6}>
          <CardMedia
            component="img"
            style={{ width: "auto", height: "200px", margin: "0 auto" }}
            image={cycle.image}
            alt=""
          />
          <CardContent>
            <Typography style={{ color: "red" }} variant="h5" component="div">
              Price: {cycle.price}$
            </Typography>
            <Typography
              style={{ color: "#24C7AC" }}
              variant="h4"
              component="div"
            >
              {cycle.title}
            </Typography>
            <Typography
              style={{ color: "#24C7AC" }}
              variant="h6"
              component="div"
            >
              Type: {cycle.type}
            </Typography>
            <Typography
              style={{ color: "#24C7AC" }}
              variant="h6"
              component="div"
            >
              Brand: {cycle.brand}
            </Typography>
            <Typography variant="body2" component="div">
              {cycle.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%", margin: "0px auto" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#24C7AC",
                padding: "15%",
                borderRadius: "10px",
              }}
            >
              <input
                defaultValue={user?.name || "Your Name"}
                style={{
                  width: "80%",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  border: "0px",
                }}
                {...register("name", { maxLength: 200 })}
              />
              {}
              <br />
              <textarea
                defaultValue={user?.email}
                style={{
                  width: "80%",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  border: "0px",
                }}
                {...register("email", {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {}
              <br />
              <input
                // disabled
                defaultValue={cycle.price}
                style={{
                  width: "80%",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  border: "0px",
                }}
                type="number"
                {...register("price", { required: true })}
              />
              {}
              <br />
              <input
                // disabled
                defaultValue={cycle.brand}
                style={{
                  width: "80%",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  border: "0px",
                }}
                type="text"
                {...register("brand")}
              />
              {}
              <br />
              <input
                // disabled
                defaultValue={cycle.type}
                style={{
                  width: "80%",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  border: "0px",
                }}
                type="text"
                {...register("type")}
              />
              {}
              <br />

              <input
                value="Place Order"
                type="submit"
                style={{
                  //   backgroundColor: "lightgray",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  padding: "15px",
                  marginTop: "10px",
                  color: "#24C7AC",
                  border: "0px",
                  width: "80%",
                  borderRadius: "5px",
                }}
              />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CycleDetails;
