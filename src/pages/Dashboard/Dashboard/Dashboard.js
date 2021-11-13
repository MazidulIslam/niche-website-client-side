import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import { Switch, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import { Button } from "@mui/material";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddReview from "../AddReview/AddReview";
import AddCycles from "../AddCycles/AddCycles";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userLogout, admin, user } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography sx={{ mt: 2 }} variant="h6">
        Logged In As:
        <br />
        {user?.email}
      </Typography>
      <Toolbar />
      <Box>
        {/* link start */}
        <Link to={`${url}`} style={{ textDecoration: "none" }}>
          <Button style={{ color: "#24C7AC" }}>Dashboard</Button>
        </Link>{" "}
        <br />
        <Link to="/cycles" style={{ textDecoration: "none" }}>
          <Button style={{ color: "#24C7AC" }}>Purchase Cycle</Button>
        </Link>{" "}
        <br />
        <Link to={`${url}/myOrders`} style={{ textDecoration: "none" }}>
          <Button style={{ color: "#24C7AC" }}>My Orders</Button>
        </Link>
        <br />
        <Link
          to={`${url}/pay`}
          style={{ textDecoration: "none", color: "#24C7AC" }}
        >
          <Button style={{ color: "#24C7AC" }}>Pay</Button>
        </Link>
        <br />
        <Link
          to={`${url}/addReview`}
          style={{ textDecoration: "none", color: "#24C7AC" }}
        >
          <Button style={{ color: "#24C7AC" }}>Add Review</Button>
        </Link>
        {admin && (
          <Box>
            <Link
              to={`${url}/addCycles`}
              style={{ textDecoration: "none", color: "#24C7AC" }}
            >
              <Button style={{ color: "#24C7AC" }}>Add Cycles</Button>
            </Link>
            <br />
            <Link
              to={`${url}/makeAdmin`}
              style={{ textDecoration: "none", color: "#24C7AC" }}
            >
              <Button style={{ color: "#24C7AC" }}>Make Admin</Button>
            </Link>

            <Link
              to={`${url}/manageOrders`}
              style={{ textDecoration: "none", color: "#24C7AC" }}
            >
              <Button style={{ color: "#24C7AC" }}>Manage Orders</Button>
            </Link>
          </Box>
        )}
        <br />
      </Box>
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="error" onClick={userLogout}>
            Logout
          </Button>
        </Link>
      </Box>
      {/* //link end */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#24C7AC" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Quicle
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>

          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute path={`${path}/addCycles`}>
            <AddCycles></AddCycles>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
