import React from "react";
import Wave from "react-wavify";
import { PropTypes } from "prop-types";

function ColorWave({ color }) {
  return (
    <Wave
      mask="url(#mask)"
      fill={color}
      paused={false}
      options={{ height: 15, speed: 0.1, amplitude: 10, points: 3 }}
      filter="brightness(0.95)"
    >
      <defs>
        <linearGradient
          id="gradient"
          gradientTransform="rotate(90)"
          filter="brightness(0.9)"
        >
          <stop offset="0" stopColor="white" />
          <stop offset="0.3" stopColor="black" />
        </linearGradient>
        <mask id="mask">
          <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
        </mask>
      </defs>
    </Wave>
  );
}

ColorWave.propTypes = {
  color: PropTypes.string,
};

ColorWave.defaultProps = {
  color: "white",
};

export default React.memo(ColorWave);
