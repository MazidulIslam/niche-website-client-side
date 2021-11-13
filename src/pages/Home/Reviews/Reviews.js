import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Typography } from "@mui/material";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => {
    const url = `https://ancient-sands-65869.herokuapp.com/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid xs={12} md={12} sx={{ m: "auto" }}>
      <h1 style={{ color: "#24C7AC" }}>Testimonials</h1>
      <Box sx={{ flexgrow: 1 }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {reviews.map((review, index) => (
                <Grid
                  style={{ backgroundColor: "#24C7AC" }}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{ m: 10, p: 10, borderRadius: "10px" }}
                >
                  <Typography
                    style={{
                      // clear: "both",
                      display: "block",
                      color: "white",
                    }}
                    variant="h6"
                    component="div"
                  >
                    <span style={{ fontSize: "3.3rem" }}>
                      <sub>" </sub>
                    </span>
                    {review.reviewText}

                    <span style={{ fontSize: "3.3rem" }}>
                      <sub> "</sub>
                    </span>
                  </Typography>

                  <Rating name="read-only" value={review.ratings} readOnly />
                  <Typography variant="h4" component="div">
                    {review.name}
                  </Typography>
                </Grid>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
};

export default Reviews;
