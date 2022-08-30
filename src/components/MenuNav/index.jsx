import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const MenuNav = () => {
  const nav = useNavigate();

  return (
    <div>
      <S.Header>
        <S.Box>
          <div>
            <S.Logo onClick={() => nav("/")} src={Logo} alt="Logo" />
            <h1>Fernanda Constância</h1>
          </div>
          <S.Nav>
            <div onClick={() => nav("/")}>Sobre</div>
            <div onClick={() => nav("/project")}>Projetos</div>
            <div onClick={() => nav("/resume")}>Currículo</div>
            <div onClick={() => nav("/contact")}>Contato</div>
          </S.Nav>
        </S.Box>
      </S.Header>
    </div>
  );
};
