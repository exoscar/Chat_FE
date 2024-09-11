import { ThemeProvider } from "@emotion/react";
import theme from "./constants/theme";
import { Typography } from "@mui/material";
import { Button } from "./components/atoms/Button";
import { Modal } from "./components/atoms/Modal";
import { Icon } from "./components/atoms/Icon";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Typography variant="h1" color="primary">
          Hello World
        </Typography>
        <Button color="primary">apples</Button>
        <Modal open={true} onClose={() => {}}>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            Apples
          </div>
        </Modal>
        <div>
          <Icon icon="home" size={48} color="blue" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
