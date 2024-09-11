import { createTheme, ThemeOptions, Theme as MUITheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    myCustomColor: {
      dark: React.CSSProperties["color"];
      text: {
        main: React.CSSProperties["color"];
        secondary: React.CSSProperties["color"];
        dark: React.CSSProperties["color"];
      };
      blue: {
        main: React.CSSProperties["color"];
      };
      yellow: {
        main: React.CSSProperties["color"];
      };
    };
  }
  interface PaletteOptions {
    myCustomColor?: {
      dark?: React.CSSProperties["color"];
      text?: {
        main?: React.CSSProperties["color"];
        secondary?: React.CSSProperties["color"];
        dark?: React.CSSProperties["color"];
      };
      blue: {
        main: React.CSSProperties["color"];
      };
      yellow: {
        main: React.CSSProperties["color"];
      };
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#F04D24", dark: "#D9D9D9", light: "#FBFBFB" },
    secondary: {
      dark: "#0F172A",
      main: "#C3C4CC",
      light: "#D3c3BF",
    },
    myCustomColor: {
      text: {
        main: "#615151",
        secondary: "#FBFBFB",
        dark: "#1E1E1E",
      },
      blue: {
        main: "#0099FF",
      },
      yellow: {
        main: "#FFD23F",
      },
    },
  },
};

const theme = createTheme(themeOptions);

declare module "@emotion/react" {
  export interface Theme extends MUITheme {}
}

export default theme;
