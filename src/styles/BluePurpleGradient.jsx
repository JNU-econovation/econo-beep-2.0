import theme from "@/styles/Theme";

function BluePurpleGradient() {
  return (
    <svg width="0" height="0">
      <linearGradient
        id="blue-purple-gradient"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%"
      >
        <stop stopColor={theme.blue} offset="0%" />
        <stop stopColor={theme.purple} offset="100%" />
      </linearGradient>
    </svg>
  );
}

export default BluePurpleGradient;
