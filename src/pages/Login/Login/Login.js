import { Alert, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "./login.jpg";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, userLogin, authError } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    userLogin(email, password, location, history);
    reset();
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6}>
        <form
          style={{ width: "100%", marginTop: "25%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 style={{ color: "#24C7AC" }}>Please Login</h1>

          <input
            type="email"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "5px",
              //   marginBottom: "15px",
              borderColor: "#24C7AC",
            }}
            placeholder="email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />

          <input
            type="password"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "5px",
              borderColor: "#24C7AC",
            }}
            placeholder="password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          {user?.email && (
            <Alert style={{ width: "50%", margin: "auto" }} severity="success">
              Login successfully!
            </Alert>
          )}
          {authError && (
            <Alert style={{ width: "50%", margin: "auto" }} severity="error">
              Wrong email or Password{" "}
            </Alert>
          )}
          <input
            value="Login"
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              color: "white",
              backgroundColor: "#24C7AC",
              width: "56%",
              padding: "15px",
              marginBottom: "5px",
              marginTop: "5px",
              borderRadius: "5px",
              borderColor: "#24C7AC",
            }}
            type="submit"
          />
          <br />

          <Link
            style={{
              fontSize: "1.1rem",
              textDecoration: "none",
              color: "#24C7AC",
            }}
            to="./register"
          >
            New to Quicle? Please Register
          </Link>
        </form>
        <Link style={{ textDecoration: "none" }} to="/home">
          <Button style={{ backgroundColor: "#24C7AC" }} variant="contained">
            Go Back
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <img style={{ width: "100%" }} src={login} alt="" />
      </Grid>
    </Grid>
  );
};

export default Login;
