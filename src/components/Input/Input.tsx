import React, { ChangeEvent } from "react";
import { IInput } from "../../types/types";
import { InputError, InputStyled, InputWrapper } from "./Input.element";

const Input = ({
  placeholder,
  isError,
  errorText,
  value,
  onChange,
  onlyNNumber,
}: IInput) => {
  function inputHandlerOnlyNumber(e: ChangeEvent<HTMLInputElement>) {
    (Number(e.target.value) || e.target.value.length === 0) && onChange(e);
  }
  return (
    <InputWrapper>
      {onlyNNumber ? (
        <InputStyled
          placeholder={placeholder}
          value={value}
          onChange={inputHandlerOnlyNumber}
        />
      ) : (
        <InputStyled
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {isError && <InputError>{errorText}</InputError>}
    </InputWrapper>
  );
};

export default React.memo(Input);
