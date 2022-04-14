import { useSelector } from "react-redux";
import Book from "../Book/Book";
import { RootState } from "../../redux/store";
import {
  BooksWrapper,
  ButtonsWrapper,
  HeaderSort,
  SortWrapper,
  WrapperLeftSide,
} from "./LeftSide.element";
import { sortConstants } from "../../constants/constants";
import { Buttons } from "../Buttons/Buttons";
import { IBook, SortStatus } from "../../types/types";
import { useState } from "react";

const { header, forAuthor, forName, reset } = sortConstants;
const {
  increaseForName,
  decreaseForName,
  increaseForAuthor,
  decreaseForAuthor,
  resetForFunction,
} = SortStatus;

function sort(a: string, b: string): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function sortForNameIncrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort((a, b) =>
    sort(a.name.toLowerCase(), b.name.toLowerCase())
  );
  return result;
}
function sortForNameDecrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort((a, b) =>
    sort(b.name.toLowerCase(), a.name.toLowerCase())
  );
  return result;
}
function sortForAuthorIncrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort((a, b) =>
    sort(a.author.toLowerCase(), b.author.toLowerCase())
  );
  return result;
}
function sortForAuthorDecrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort((a, b) =>
    sort(b.author.toLowerCase(), a.author.toLowerCase())
  );
  return result;
}

const LeftSide = () => {
  const store = useSelector((store: RootState) => store);
  const [sortState, setSortState] = useState<SortStatus>(resetForFunction);
  function sortStore() {
    switch (sortState) {
      case increaseForName:
        return sortForNameIncrease(store);
      case decreaseForName:
        return sortForNameDecrease(store);
      case increaseForAuthor:
        return sortForAuthorIncrease(store);
      case decreaseForAuthor:
        return sortForAuthorDecrease(store);
      default:
        return store;
    }
  }
  function sortForNameHandler() {
    if (sortState === increaseForName) {
      setSortState(decreaseForName);
    } else {
      setSortState(increaseForName);
    }
  }
  function sortForAuthorHandler() {
    if (sortState === increaseForAuthor) {
      setSortState(decreaseForAuthor);
    } else {
      setSortState(increaseForAuthor);
    }
  }

  return (
    <WrapperLeftSide>
      <SortWrapper>
        <HeaderSort>{header}</HeaderSort>
        <ButtonsWrapper>
          <Buttons text={forAuthor} onClick={sortForAuthorHandler} />
          <Buttons text={forName} onClick={sortForNameHandler} />
          <Buttons
            text={reset}
            onClick={() => setSortState(resetForFunction)}
          />
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
