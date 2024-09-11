import { ThemeProvider } from "@emotion/react";
import theme from "./constants/theme";
import { Typography } from "@mui/material";
import { Button } from "./components/atoms/Button";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Typography variant="h1" color="primary">
          Hello World
        </Typography>
        <Button color="primary">apples</Button>
      </>
    </ThemeProvider>
  );
}

export default App;
