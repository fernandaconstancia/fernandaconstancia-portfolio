import * as S from "./style";

export const TextArea = ({
  label,
  type,
  register,
  name,
  error = "",
  ...props
}) => {
  return (
    <S.TextArea error={!!error}>
      <label>{label}</label>
      <div>
        <textarea type={type} {...register(name)} {...props} />

        {!!error && <S.Error>{error}</S.Error>}
      </div>
    </S.TextArea>
  );
};
