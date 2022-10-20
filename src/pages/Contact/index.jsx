import * as S from "./style";
import { SiGithub, SiInstagram, SiLinkedin, SiFacebook } from "react-icons/si";

export const Contact = () => {
  return (
    <S.Container>
      <S.Header>Contato</S.Header>
      <S.Box>
        {/* <div> */}
        <S.List>
          <li>
            <SiLinkedin /> LinkedIn
          </li>
          <li>
            <SiGithub />
            GitHub
          </li>
          <li>
            <SiInstagram />
            Instagram
          </li>
          <li>
            <SiFacebook />
            Facebook
          </li>
        </S.List>
        {/* </div>
        <div> */}
        <S.Form
          action="https://getform.io/f/bfaef29d-df7c-484a-a4e3-34e053ff56db"
          method="POST"
        >
          <S.Input>
            <label>Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" />
          </S.Input>
          <S.Input>
            <label>Email</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </S.Input>
          <S.Textarea>
            <label>Mensagem</label>
            <textarea
              type="text"
              name="message"
              placeholder="Digite sua mensagem"
              cols="20"
              rows="5"
            />
          </S.Textarea>
          <S.Button type="submit">Enviar</S.Button>
        </S.Form>
        {/* </div> */}
      </S.Box>
    </S.Container>
  );
};

// <div>
//   <form
//     action="https://getform.io/f/bfaef29d-df7c-484a-a4e3-34e053ff56db"
//     method="POST"
//   >
//     <input type="text" name="name" placeholder="Digite seu nome" />
//     <input type="email" name="email" placeholder="Digite seu email" />
//     <textarea
//       type="text"
//       name="message"
//       placeholder="Digite sua mensagem"
//       cols="20"
//       rows="5"
//     />
{
  /* <!-- checkbox handle -->  */
}
{
  /* <input type="checkbox" name="subscribe" value="yes" checked />
          <input type="hidden" name="subscribe" value="no" /> */
}
{
  /* <!-- radio button handle -->  */
}
{
  /* <input type="radio" name="gender" value="male" checked />
          <input type="radio" name="gender" value="female" />
          <input type="radio" name="gender" value="other" /> */
}
{
  /* <!-- select field handle -->  */
}
{
  /* <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
          <option value="five-plus-years">5+ years</option>
        </select> */
}
{
  /* <button type="submit">Send</button>
      </form>
    </div> */
}
