import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const { user, userLogout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#24C7AC" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quicle
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "5px",
            }}
            as={Link}
            to="/home"
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "5px",
            }}
            as={Link}
            to="/cycles"
          >
            <Button color="inherit">Cycles</Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button
                style={{
                  // backgroundColor: "black",
                  color: "white",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                variant="contained"
                onClick={userLogout}
                color="error"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
