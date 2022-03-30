import styled from "styled-components";

export const InputStyled = styled.input`
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
  border-bottom: 2px solid #3d3c3c;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const InputError = styled.div`
  position: absolute;
  font-size: 15px;
  color: tomato;
`;
