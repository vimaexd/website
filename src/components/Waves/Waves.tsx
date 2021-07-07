import React from "react";

function Wave1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <defs>
        <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#8548f5"></stop>
          <stop offset="100%" stopColor="#fa93ff"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#grad)" d="M0 0l48 32c48 32 144 96 240 144s192 80 288 64 192-80 288-122.7c96-42.3 192-64.3 288-48 96 15.7 192 69.7 240 96l48 26.7V0H0z"></path>
    </svg>
  );
}

export {
  Wave1
};
