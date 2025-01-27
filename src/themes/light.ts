import backgroundLight from "../assets/background-light.png";
import switchLight from "../assets/switch-light.png";
import switchLightHover from "../assets/switch-light-hover.png";

const baseColor = "0, 0, 0";
export const lightMode = {
  text: `rgba(${baseColor}, 1)`,
  stroke: `rgba(${baseColor}, 0.5)`,
  surface: `rgba(${baseColor}, 0.05)`,
  surfaceHover: `rgba(${baseColor}, 0.02)`,
  highlight: `rgba(${baseColor}, 0.1)`,
  backgroundImage: `url(${backgroundLight})`,
  switchImage: `url(${switchLight})`,
  switchHover: `url(${switchLightHover})`,
};
