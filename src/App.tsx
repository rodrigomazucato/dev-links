import { darkMode } from "./themes/dark";
import { lightMode } from "./themes/light";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const currentTheme = clicked ? darkMode : lightMode;
  return (
    <ThemeProvider theme={currentTheme}>
      <div style={{ backgroundColor: currentTheme.text, display: "hidden" }}>
        <button onClick={() => setClicked(!clicked)}>Clicar</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
