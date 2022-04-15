import React from "react";
import { BoldSpan, Span, WrapperInfoAboutBook } from "./RightSide.element";

const InfoAboutBook = ({ name, info }: { name: string; info: string }) => {
  return (
    <WrapperInfoAboutBook>
      <BoldSpan>{name} - </BoldSpan>
      <Span>{info}</Span>
    </WrapperInfoAboutBook>
  );
};

export default React.memo(InfoAboutBook);
