import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Router } from "./Routes";
import { GlobalStyle } from "./GlobalStyle";
import { MenuNav } from "./components/MenuNav";
import Logo from "./assets/logo.png";

export const App = () => {
  const nav = useNavigate();

  return (
    <div>
      <GlobalStyle />
      <Router />
      <MenuNav />
    </div>
  );
};
