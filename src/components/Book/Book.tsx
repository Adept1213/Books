import React from "react";
import { useDispatch } from "react-redux";
import { IBookShow } from "../../types/types";
import { getNameInitials } from "../../helpers";
import { actionChangeIsOpen } from "../../redux/actions";
import {
  BookAuthor,
  BookNameProfile,
  BookWrapper,
  FullFace,
  Profile,
  BookNameFullFace,
  Span,
} from "./Book.element";

const Book = ({ name, author, id, isOpen }: IBookShow) => {
  const dispatch = useDispatch();
  return (
    <BookWrapper onClick={() => dispatch(actionChangeIsOpen(id))}>
      <Profile isChoiceBook={isOpen}>
        <BookAuthor>
          <Span>{getNameInitials(author)}</Span>
        </BookAuthor>
        <BookNameProfile>
          <Span>{name}</Span>
        </BookNameProfile>
      </Profile>
      <FullFace isChoiceBook={isOpen}>
        <BookAuthor>{author}</BookAuthor>
        <BookNameFullFace>{name}</BookNameFullFace>
      </FullFace>
    </BookWrapper>
  );
};

export default React.memo(Book);
