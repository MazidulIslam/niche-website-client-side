import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://ancient-sands-65869.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1 style={{ color: "#24C7AC" }}>Make an Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="Put an email here to make an admin"
          type="email"
          variant="standard"
          sx={{ width: "24%", m: 2 }}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          //   defaultValue=""
          size="small"
        />
        <br />
        <Button
          style={{ backgroundColor: "#24C7AC" }}
          type="submit"
          variant="contained"
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Maid Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
