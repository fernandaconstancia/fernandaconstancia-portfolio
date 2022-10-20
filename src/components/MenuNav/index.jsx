import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState } from "react";

export const MenuNav = () => {
  const [navMobile, setNavMobile] = useState(false);
  const nav = useNavigate();

  const navigate = (route) => {
    setNavMobile(!navMobile);
    nav(route);
  };

  return (
    <div>
      <S.Header>
        <S.Box>
          <S.Name>
            <S.Logo onClick={() => nav("/")} src={Logo} alt="Logo" />
            <h1>Fernanda Constância</h1>
          </S.Name>

          <S.Mobile>
            <input
              checked={navMobile}
              onClick={() => setNavMobile(!navMobile)}
              type="checkbox"
              name="mobile"
              id="mobile"
            />
            <label htmlFor="mobile" />
            <span />
          </S.Mobile>

          <S.Nav mobile={!navMobile}>
            <div onClick={() => navigate("/")}>Início</div>
            <div onClick={() => navigate("/about")}>Sobre</div>
            <div onClick={() => navigate("/project")}>Projetos</div>
            <div onClick={() => navigate("/resume")}>Currículo</div>
            <div onClick={() => navigate("/contact")}>Contato</div>
          </S.Nav>
        </S.Box>
      </S.Header>
    </div>
  );
};
