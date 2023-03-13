export const randomColor = (forcedHue, forcedSaturation, forcedLightness) => {
  const hue = forcedHue || Math.floor(Math.random() * 360);
  const saturation = forcedSaturation || Math.floor(Math.random() * 100);
  const lightness = forcedLightness || Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
