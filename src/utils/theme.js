const COLORS = {
  text: "#252F40",
  primary: "#CB0C9F",
  secondary: "#627594",
  tertiary: "#E8AE4C",
  black: "#252F40",
  white: "#FFFFFF",
  dark: "#252F40",
  light: "#E9ECEF",
  gray: "#A7A8AE",
  danger: "#EA0606",
  warning: "#FFC107",
  success: "#82D616",
  info: "#17C1E8",
  card: "#FFFFFF",
  background: "#E9ECEF",
};

const SIZES = {
  h1: 48,
  h2: 38,
  h3: 32,
  h4: 22,
  h5: 16,
  p: 16,
};

const GRADIENTS = {
  primary: ["#FF0080", "#7928CA"],
  secondary: ["#A8B8D8", "#627594"],
  info: ["#21D4FD", "#2152FF"],
  success: ["#98EC2D", "#17AD37"],
  warning: ["#FBCF33", "#F53939"],
  danger: ["#FF667C", "#EA0606"],
  light: ["#EBEFF4", "#CED4DA"],
  dark: ["#3A416F", "#141727"],
  white: [String(COLORS.white), "#EBEFF4"],
  black: [String(COLORS.black), "#141727"],
};

const theme = {
  COLORS,
  SIZES,
  GRADIENTS,
};

export default theme;
