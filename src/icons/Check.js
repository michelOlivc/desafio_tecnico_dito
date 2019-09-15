import React from "react";

const SvgCheck = props => (
  <svg {...props}>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <circle stroke="#D8D8D8" fill="#FFF" cx={6} cy={6} r={6} />
      <path
        d="M8.827 4.594l-.455-.458a.242.242 0 00-.342-.001L5.18 6.962 3.975 5.746a.242.242 0 00-.342-.001l-.458.454a.242.242 0 00-.002.342l1.83 1.846a.242.242 0 00.343 0l3.48-3.45a.242.242 0 000-.343z"
        fill="#00B336"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgCheck;
