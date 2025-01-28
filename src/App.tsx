import { useState } from "react";
import { darkMode } from "./themes/dark";
import { lightMode } from "./themes/light";
import { ThemeProvider } from "styled-components";
import { Link } from "./components/Link";
import { Profile } from "./components/Profile";
import styles from "./App.module.css";
import { Switch } from "./components/Switch";
import { GlobalStyle } from "./globalStyle";
import { SocialMedia } from "./components/SocialMedia";

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
        <SocialMedia />
        <span style={{ textAlign: "center" }}>
          Feito com ♥ pela <u>Rocketseat</u>
        </span>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
