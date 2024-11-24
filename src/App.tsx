import { useState } from "react";
import { darkMode } from "./themes/dark";
import { lightMode } from "./themes/light";
import { ThemeProvider } from "styled-components";
import { Profile } from "./components/Profile";
import styles from "./App.module.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const currentTheme = clicked ? darkMode : lightMode;
  return (
    <ThemeProvider theme={currentTheme}>
      <div className={styles.container}>
        <Profile />
      </div>
    </ThemeProvider>
  );
}

export default App;
