import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Web Developer", "Enthusiastic Programmer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: "natural"
      }}
    />
  );
}

export default Type;
