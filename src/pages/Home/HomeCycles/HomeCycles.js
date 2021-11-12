import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import HomeCycle from "../HomeCycle/HomeCycle";

const HomeCycles = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    const url = `http://localhost:7000/cycles`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCycles(data.slice(0, 6));
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 3, color: "success.main" }}
          variant="h6"
          component="div"
        >
          Cycles
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
          Explore Our Cycles
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cycles.map((cycle) => (
            <HomeCycle key={cycle._id} cycle={cycle}></HomeCycle>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCycles;
