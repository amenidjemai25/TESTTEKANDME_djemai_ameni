function PlayIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="69"
      fill="none"
      viewBox="0 0 68 69"
      {...props}
    >
      <circle
        cx="34"
        cy="34.512"
        r="33"
        fill="url(#paint0_linear_1_301)"
        stroke="url(#paint1_linear_1_301)"
        strokeWidth="2"
      ></circle>
      <path
        fill="#FCFCFC"
        d="M41.925 35.197l-10.664 8.665C29.954 44.924 28 43.994 28 42.31V26.314c0-1.61 1.806-2.56 3.133-1.648l10.664 7.331a2 2 0 01.128 3.2z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_301"
          x1="34"
          x2="40.857"
          y1="2.512"
          y2="81.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B2B2B"></stop>
          <stop offset="1" stopColor="#625D31"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_301"
          x1="34"
          x2="34"
          y1="-6.06"
          y2="79.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C49514"></stop>
          <stop offset="1" stopColor="#F4C02F"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlayIcon;
