import React from "react";
import { ButtonsElement } from "./Buttons.elements";

const Buttons = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return <ButtonsElement onClick={onClick}>{text}</ButtonsElement>;
};

export default React.memo(Buttons);
