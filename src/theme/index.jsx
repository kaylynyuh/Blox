// Define defaults for color palette in a static object.
// Set value to theme object like theme.thing.if.it.exists || defaults.thing

const defaultPalette = {
  //--------------------------------------------------------------------------------
  // Colors
  //--------------------------------------------------------------------------------
  palette: {
    primary: {
      light: "#e3f2fd",
      main: "#90caf9",
      dark: "#42a5f5",
    },
    secondary: {
      light: "#f3e5f5",
      main: "#ce93d8",
      dark: "#ab47bc",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ffa726",
      dark: "#f57c00",
    },
    info: {
      light: "#4fc3f7",
      main: "#29b6f6",
      dark: "#0288d1",
    },
    success: {
      light: "#81c784",
      main: "#66bb6a",
      dark: "#388e3c",
    },
  },
};

export const generateTheme = (theme) => {
  console.log('generateTheme: ', theme);
  return {
    //--------------------------------------------------------------------------------
    // Components
    //--------------------------------------------------------------------------------
    button: {
      variant: {
        contained: {
          backgroundColor: theme.palette.primary.main || defaultPalette.palette.primary.main,
          color: "#fff",
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: theme.palette.primary.main || defaultPalette.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main || defaultPalette.palette.primary.main}`,
        },
        text: {
          backgroundColor: "transparent",
          color: theme.palette.primary.main || defaultPalette.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main || defaultPalette.palette.primary.main}`,
        },
      },
    },
  };
};
