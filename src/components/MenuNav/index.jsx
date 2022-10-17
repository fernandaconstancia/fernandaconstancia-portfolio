import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState } from "react";

export const MenuNav = () => {
  const [navMobile, setNavMobile] = useState(false);

  const nav = useNavigate();

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
              onClick={() => setNavMobile(!navMobile)}
              type="checkbox"
              name="mobile"
              id="mobile"
            />
            <label htmlFor="mobile" />
            <span />
          </S.Mobile>

          <S.Nav mobile={!navMobile}>
            <div onClick={() => nav("/")}>Início</div>
            <div onClick={() => nav("/about")}>Sobre</div>
            <div onClick={() => nav("/project")}>Projetos</div>
            <div onClick={() => nav("/resume")}>Currículo</div>
            <div onClick={() => nav("/contact")}>Contato</div>
          </S.Nav>
        </S.Box>
      </S.Header>
    </div>
  );
};
