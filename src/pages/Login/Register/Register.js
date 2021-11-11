import { Alert, CircularProgress, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import login from "./../Login/login.jpg";
import useAuth from "./../../../hooks/useAuth";

const Register = () => {
  const history = useHistory();
  const { userRegister, isLoading, user, authError } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userRegister(data.name, data.phone, data.email, data.password, history);
    reset();
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6}>
        <form
          style={{ width: "100%", marginTop: "15%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 style={{ color: "#24C7AC" }}>Please Register</h1>
          <input
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "5px",
              //   marginBottom: "15px",
              borderColor: "#24C7AC",
            }}
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <input
            type="number"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "5px",
              //   marginBottom: "15px",
              borderColor: "#24C7AC",
            }}
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          <br />
          {errors.phone && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
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
            placeholder="Your Password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />

          <input
            value="Register"
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              color: "white",
              backgroundColor: "#24C7AC",
              width: "56%",
              padding: "15px",
              marginBottom: "5px",
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
            to="./login"
          >
            Already Registered? Please Login
          </Link>
        </form>
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <img style={{ width: "100%" }} src={login} alt="" />
      </Grid>
    </Grid>
  );
};

export default Register;
