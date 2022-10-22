import * as S from "./style";
import { SiGithub, SiInstagram, SiLinkedin, SiFacebook } from "react-icons/si";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

export const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    mensage: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleConfirm = () => {
    console.log("Obrigada pela mensagem!");
  };

  return (
    <S.Container>
      <S.Header>Contato</S.Header>
      <S.Box>
        <S.List>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/fernandaconstancia/"
            >
              <SiLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/fernandaconstancia"
            >
              <SiGithub />
              GitHub
            </a>
          </li>

          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/feh.constancia/"
            >
              <SiInstagram />
              Instagram
            </a>
          </li>

          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/Feh.Constancia"
            >
              <SiFacebook />
              Facebook
            </a>
          </li>
        </S.List>
        <S.Form
          onSubmit={handleSubmit(handleConfirm)}
          action="https://getform.io/f/bfaef29d-df7c-484a-a4e3-34e053ff56db"
          method="POST"
        >
          <TextField
            label="Name"
            type="name"
            register={register}
            name="name"
            placeholder="Digite seu nome"
            error={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            register={register}
            name="email"
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <TextArea
            label="Mensagem"
            type="text"
            register={register}
            name="mensage"
            placeholder="Digite sua mensagem"
            cols="20"
            rows="5"
            error={errors.mensage?.message}
          />
          <S.Button type="submit">Enviar</S.Button>
        </S.Form>
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

/* <!-- checkbox handle -->  */

/* <input type="checkbox" name="subscribe" value="yes" checked />
          <input type="hidden" name="subscribe" value="no" /> */

/* <!-- radio button handle -->  */

/* <input type="radio" name="gender" value="male" checked />
          <input type="radio" name="gender" value="female" />
          <input type="radio" name="gender" value="other" /> */

/* <!-- select field handle -->  */

/* <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
          <option value="five-plus-years">5+ years</option>
        </select> */

/* <button type="submit">Send</button>
      </form>
    </div> */
