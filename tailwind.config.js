const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Takes the viewport widths in pixels and the font sizes in rem
function getResponsiveValue(minWidth, maxWidth, minFontSize, maxFontSize) {
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}px, ${yAxisIntersection}px + ${
    slope * 100
  }vw, ${maxFontSize}px)`;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ibm-plex-mono", "sans-serif"],
        serif: ["latienne-pro", "serif"],
      },
      fontSize: {
        tiny: [getResponsiveValue(screens.sm, screens["2xl"], 12, 14), "1.2em"],
        small: [
          getResponsiveValue(screens.sm, screens["2xl"], 12, 16),
          "1.2em",
        ],
        medium: [
          getResponsiveValue(screens.sm, screens["2xl"], 20, 30),
          "1.075em",
        ],
        big: [
          getResponsiveValue(screens.sm, screens["2xl"], 30, 100),
          "1.075em",
        ],
      },
      letterSpacing: {
        "big-text": "-0.02em",
      },
    },
  },
  plugins: [],
};
