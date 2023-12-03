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
        width: "280px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0px",
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
          <img
            src={slide.content.image}
            alt={slide.introline}
            style={{ width: "100%", height: "140px", objectFit: "cover" }}
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
