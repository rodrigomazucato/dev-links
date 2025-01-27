import backgroundDark from "../assets/background-dark.png";
import switchDark from "../assets/switch-dark.png";

const baseColor = "255, 255, 255";
export const darkMode = {
  text: `rgba(${baseColor}, 1)`,
  stroke: `rgba(${baseColor}, 0.5)`,
  surface: `rgba(${baseColor}, 0.1)`,
  surfaceHover: `rgba(${baseColor}, 0.05)`,
  highlight: `rgba(${baseColor}, 0.2)`,
  backgroundImage: `url(${backgroundDark})`,
  switchImage: `url(${switchDark})`,
};
