export const generateTheme = (baseColor: string) => {
  return {
    text: `rgba(${baseColor}, 1)`,
    stroke: `rgba(${baseColor}, 0.5)`,
    highlight: `rgba(${baseColor}, 0.1)`,
    surface: `rgba(${baseColor}, 0.05)`,
    "surface-hover": `rgba(${baseColor}, 0.02)`,
  };
};
