import { IInput } from "../../types/types";
import { InputError, InputStyled, InputWrapper } from "./Input.element";

const Input = ({
  placeholder,
  isError,
  errorText,
  value,
  setValue,
  onlyNNumber,
}: IInput) => {
  function inputHandlerOnlyNumber(value: string) {
    (Number(value) || value.length === 0) && setValue(value);
  }

  return (
    <InputWrapper>
      {onlyNNumber ? (
        <InputStyled
          placeholder={placeholder}
          value={value}
          onChange={(e) => inputHandlerOnlyNumber(e.target.value)}
        />
      ) : (
        <InputStyled
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {isError && <InputError>{errorText}</InputError>}
    </InputWrapper>
  );
};

export default Input;
