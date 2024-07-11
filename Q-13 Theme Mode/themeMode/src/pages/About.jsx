import React from "react";
import { useTheme } from "../Theme-Context";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`page ${theme}`}>
      <h1>About Page</h1>
      <p>Learn more about us here!</p>
    </div>
  );
};

export default About;
