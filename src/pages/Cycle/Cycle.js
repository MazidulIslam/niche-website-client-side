import { CardMedia, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cycle = (props) => {
  const { title, price, image, _id } = props.cycle;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ minWidth: 275, border: 1, borderRadius: 5, boxShadow: 3, my: 5 }}
      >
        <CardMedia
          component="img"
          style={{ width: "auto", height: "200px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography style={{ color: "#24C7AC" }} variant="h5" component="div">
            {title}
          </Typography>
          <Typography style={{ color: "red" }} variant="h5" component="div">
            {price}$
          </Typography>
        </CardContent>
        <Link style={{ textDecoration: "none" }} to={`/cycleDetails/${_id}`}>
          <Button
            sx={{ mb: 3 }}
            variant="contained"
            style={{ backgroundColor: "#24C7AC" }}
          >
            Purchase
          </Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default Cycle;
