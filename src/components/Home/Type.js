import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Dev Ops Engineer",
          "React Native Developer",
          "React JS Developer",
          "Mobile App Developer",
          "Frontend Developer",
          "Backend Developer",
          "Web Developer",
          "Django Developer",
          "Open Source Enthusiast",
          "Problem Solver",
          "Competitive Programmer",
          "Tech Explorer",
          ".net Frontend Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
