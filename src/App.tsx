import { useState } from "react";
import { darkMode } from "./themes/dark";
import { lightMode } from "./themes/light";
import { ThemeProvider } from "styled-components";
import { Link } from "./components/Link";
import { Profile } from "./components/Profile";
import styles from "./App.module.css";
import { Switch } from "./components/Switch";
import { GlobalStyle } from "./globalStyle";

function App() {
  const [clicked, setClicked] = useState(false);
  const currentTheme = clicked ? darkMode : lightMode;
  return (
    <ThemeProvider theme={currentTheme}>
      <div className={styles.container}>
        <Profile />
        <Switch onClick={() => setClicked(!clicked)} />
        <div className={styles.links}>
          <Link titulo="Inscreva-se no NLW" />
          <Link titulo="Baixe meu ebook" />
          <Link titulo="Conheça o explorer" />
          <Link titulo="Acompanhe as redes sociais" />
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
