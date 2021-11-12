import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardContent, Typography } from "@mui/material";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => {
    const url = `http://localhost:7000/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid xs={12} md={8} sx={{ m: "auto" }}>
      <h1 style={{ color: "#24C7AC" }}>Reviews</h1>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {reviews.map((review, index) => (
          <Grid>
            <Typography
              style={{
                // clear: "both",
                display: "block",
                color: "#24C7AC",
              }}
              variant="body2"
              component="div"
            >
              {review.reviewText}
            </Typography>
            <Typography variant="h6" component="div">
              Ratings: {review.ratings}
            </Typography>
            <Typography variant="h4" component="div">
              {review.name}
            </Typography>
          </Grid>
        ))}
      </AutoPlaySwipeableViews>
    </Grid>
  );
};

export default Reviews;
