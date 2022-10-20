import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Router } from "./Routes";
import { GlobalStyle } from "./GlobalStyle";
import { MenuNav } from "./components/MenuNav";
import Logo from "./assets/nameLogo.png";
import Profile from "./assets/profile-pic.png";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Home } from "./pages/Home";

export const App = () => {
  const nav = useNavigate();

  return (
    <>
      <GlobalStyle />
      <MenuNav />
      <Router />
      {/* <Home /> */}
    </>
  );
};
