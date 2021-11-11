import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeCycle from "../HomeCycle/HomeCycle";

const services = [
  {
    name: "fluoride Treatment",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: "fluoride",
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: "cavity",
  },

  {
    name: "Teeth Whitening",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: "whitening",
  },
];

const HomeCycles = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 3, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <HomeCycle key={service.name} service={service}></HomeCycle>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCycles;
