function Chevron({ position = "left" }: { position?: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      style={{
        transform: position === "left" ? "" : "rotate(180deg)",
      }}
    >
      <g>
        <path stroke="#FCFCFC" strokeWidth="2" d="M21 8l-8 8 8 8"></path>
      </g>
    </svg>
  );
}

export default Chevron;
