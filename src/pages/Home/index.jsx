import * as S from "./style";
import { MenuNav } from "../../components/MenuNav";
import Profile from "../../assets/profile-pic.png";

export const Home = () => {
  return (
    <>
      {/* <MenuNav /> */}
      <S.Container>
        <S.BoxInfo>
          <h5>
            <i>Olá, meu nome é</i>
          </h5>
          <p>Fernanda Constância</p>
          <span>Sou Desenvolvedora Front-End</span>
        </S.BoxInfo>
        <S.BoxImage>
          <img src={Profile} alt="Foto de perfil" />
        </S.BoxImage>
      </S.Container>
    </>
  );
};
