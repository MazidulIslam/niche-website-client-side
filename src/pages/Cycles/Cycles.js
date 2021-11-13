import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Cycle from "../Cycle/Cycle";
import Navigation from "../Shared/Navigation/Navigation";

const Cycles = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    const url = `https://ancient-sands-65869.herokuapp.com/cycles`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCycles(data);
      });
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cycles.map((cycle) => (
              <Cycle key={cycle._id} cycle={cycle}></Cycle>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cycles;
