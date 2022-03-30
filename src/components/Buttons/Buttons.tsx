import { ButtonsElement } from "./Buttons.elements";

export const Buttons = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return <ButtonsElement onClick={onClick}>{text}</ButtonsElement>;
};
