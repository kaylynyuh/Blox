import BloxStyles from "./styles/BloxStyles";
import { Button } from "./components/inputs/Button/Button";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./App.css";

const theme = {
  palette: {
    primary: {
      light: "#03c1f4",
      main: "#08a1f7",
      dark: "#004fe1",
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
