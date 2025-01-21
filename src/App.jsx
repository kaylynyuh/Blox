import BloxStyles from "./styles/BloxStyles";
import { Button } from "./components/inputs/Button/Button";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./App.css";

const theme = {
  palette: {
    primary: {
      light: "#e57373",
      main: "#fff000",
      dark: "#d32f2f",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BloxStyles theme={theme} />
      <div className="card">
        <Button>Button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
