import styled from "styled-components";

export const ModalWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 2;
`;

export const WhiteRectangle = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  margin: auto;
  margin-top: 200px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
`;

export const HeaderModal = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  text-align: center;
  font-size: 35px;
  margin-top: 10px;
`;

export const WrapperInputs = styled.div`
  position: absolute;
  margin-left: 5%;
  height: 260px;
  width: 90%;
  top: 70px;
`;

export const WrapperText = styled.div`
  position: absolute;
  margin-left: 5%;
  margin-top: 100px;
  width: 90%;
  top: 70px;
  text-align: center;
  font-size: 35px;
`;
