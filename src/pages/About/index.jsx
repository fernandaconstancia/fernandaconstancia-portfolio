import * as S from "./style";
import { MenuNav } from "../../components/MenuNav";
import Profile from "../../assets/profile-pic.png";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
  SiStyledcomponents,
  SiMaterialui,
  SiChakraui,
} from "react-icons/si";

export const About = () => {
  return (
    <>
      {/* <MenuNav /> */}
      <S.Container>
        <S.BoxText>
          <S.BoxInfo>
            <p>
              Sou uma Desenvolvedora Front-End, cuja principal aspiração é
              construir os melhores sites que puder. Estou focado na construção
              de sites totalmente responsivos, intuitivos e agradáveis ​​ao
              usuário.
            </p>
            <span>Estas são as tecnologias com as quais trabalhei.</span>
          </S.BoxInfo>
          <S.BoxList>
            <li>
              <SiHtml5 />
              HTML
            </li>
            <li>
              <SiCss3 />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <SiTypescript />
              TypeScript
            </li>
            <li>
              <SiReact />
              ReactJs
            </li>
            <li>
              <SiStyledcomponents />
              Styled-components
            </li>
            <li>
              <SiTailwindcss />
              Tailwind
            </li>
            <li>
              <SiGit />
              GIT
            </li>
            <li>
              <SiMaterialui />
              Material UI
            </li>
            <li>
              <SiChakraui />
              Chakra UI
            </li>
          </S.BoxList>
        </S.BoxText>
      </S.Container>
    </>
  );
};
