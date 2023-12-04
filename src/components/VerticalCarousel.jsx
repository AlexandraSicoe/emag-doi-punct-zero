import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/joy";

const VerticalCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: { xs: "100%", lg: "280px" },
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0px",
        marginTop: { xs: "15px", lg: "0px" },

        backgroundColor: "white", // Adjust the background color
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Box
            alt={slide.introline}
            sx={{
              height: { xs: "170px", sm: "220px", lg: "140px" },

              backgroundImage: `url(${slide.content.image})`,
              backgroundSize: "cover",
              backgroundPosition: "25% 45%",
            }}
          />

          <Typography
            level="body-md"
            sx={{
              padding: "3px",
            }}
          >
            {slide.content.copy}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default VerticalCarousel;
