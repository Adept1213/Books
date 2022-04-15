import Book from "../Book/Book";
import {
  BooksWrapper,
  ButtonsWrapper,
  HeaderSort,
  SortWrapper,
  WrapperLeftSide,
} from "./LeftSide.element";
import { sortConstants } from "../../constants/constants";
import Buttons from "../Buttons/Buttons";
import useChangeSort from "./useChangeSort";

const { header, forAuthor, forName, reset } = sortConstants;

const LeftSide = () => {
  const { sortStore, sortForAuthorHandler, sortForNameHandler, resetSort } =
    useChangeSort();

  return (
    <WrapperLeftSide>
      <SortWrapper>
        <HeaderSort>{header}</HeaderSort>
        <ButtonsWrapper>
          <Buttons text={forAuthor} onClick={sortForAuthorHandler} />
          <Buttons text={forName} onClick={sortForNameHandler} />
          <Buttons text={reset} onClick={resetSort} />
        </ButtonsWrapper>
      </SortWrapper>
      <BooksWrapper>
        {sortStore().map(({ name, author, id, isOpen }) => (
          <Book key={id} name={name} author={author} id={id} isOpen={isOpen} />
        ))}
      </BooksWrapper>
    </WrapperLeftSide>
  );
};

export default LeftSide;
