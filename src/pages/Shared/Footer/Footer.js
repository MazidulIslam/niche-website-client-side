import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ width: "80%", margin: "auto" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h3>Quicle</h3>
            <p>
              A bicycle, also called a bike or cycle, is a human-powered or
              motor-powered, pedal-driven, single-track vehicle, having two
              wheels attached to a frame, one behind the other.
            </p>
          </div>

          <div style={{ width: "50%" }}>
            <h3>Footer Menu</h3>
            <h3 style={{}}>
              <Link
                as={Link}
                style={{ textDecoration: "none", color: "#24C7AC" }}
                to="/home"
              >
                Home
              </Link>
            </h3>
            <h3 style={{}}>
              <Link
                as={Link}
                style={{ textDecoration: "none", color: "#24C7AC" }}
                to="/cycles"
              >
                Explore More
              </Link>
            </h3>
            <h3 style={{}}>
              <Link
                as={Link}
                style={{ textDecoration: "none", color: "#24C7AC" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </h3>
            <h3 style={{}}>
              <Link
                as={Link}
                style={{ textDecoration: "none", color: "#24C7AC" }}
                to="/login"
              >
                Login
              </Link>
            </h3>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <p style={{ width: "50%" }}>
            <span>&copy;</span> Copyright 2021 <strong>Quicle</strong>
          </p>
          <p style={{ width: "50%" }}>
            Devoloped by{" "}
            <Link style={{ textDecoration: "none", color: "red" }} to="/home">
              Mazidul Islam
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
