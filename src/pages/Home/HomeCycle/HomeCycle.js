import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HomeCycle = (props) => {
  const { title, price, description, image } = props.cycle;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HomeCycle;
