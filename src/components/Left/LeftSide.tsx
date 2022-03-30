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

function sortForNameIncrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort(function (a, b) {
    let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return result;
}
function sortForNameDecrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort(function (a, b) {
    let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  return result;
}
function sortForAuthorIncrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort(function (a, b) {
    let nameA = a.author.toLowerCase(),
      nameB = b.author.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return result;
}
function sortForAuthorDecrease(books: IBook[]) {
  const copy = [...books];
  const result = copy.sort(function (a, b) {
    let nameA = a.author.toLowerCase(),
      nameB = b.author.toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  return result;
}

const LeftSide = () => {
  let store = useSelector((store: RootState) => store);
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
