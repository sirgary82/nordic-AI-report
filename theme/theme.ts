import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // Dark Slate Blue from the mountains
    },
    secondary: {
      main: '#00f2ea', // Glowing Teal from the shield
    },
    background: {
      default: '#e0e0e0', // Light Grey from the sky
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Dark Charcoal Grey from the trees
      secondary: '#424242', // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    body1: {
      fontSize: '1.1rem',
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: '#ffffff', // White text for dark backgrounds
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#2c3e50', // Dark Slate Blue
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.8rem',
      lineHeight: 1.2,
      color: '#2c3e50', // Dark Slate Blue
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedSecondary: {
            color: '#2c3e50'
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
      },
    },
  },
});

export default theme;