import * as S from "./style";

export const TextField = ({
  label,
  type,
  register,
  name,
  error = "",
  ...props
}) => {
  return (
    <S.Input error={!!error}>
      <label>{label}</label>
      <div>
        <input type={type} {...register(name)} {...props} />

        {!!error && <S.Error>{error}</S.Error>}
      </div>
    </S.Input>
  );
};
