import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "https://i.ibb.co/dQ2wqPX/bike1.jpg",
  },
  {
    imgPath: "https://i.ibb.co/ts9v8by/bike2.jpg",
  },
  {
    imgPath: "https://i.ibb.co/X2Xrqvg/bike3.jpg",
  },

  {
    imgPath: "https://i.ibb.co/JtJJkT4/bike4.jpg",
  },

  {
    imgPath: "https://i.ibb.co/TqPhH7M/bike5.jpg",
  },
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "90vh",
                  display: "block",
                  mx: "auto",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default Banner;
