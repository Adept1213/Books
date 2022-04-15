import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IBook, SortStatus } from "../../types/types";

const {
  increaseForName,
  decreaseForName,
  increaseForAuthor,
  decreaseForAuthor,
  resetForFunction,
} = SortStatus;

export default function useChangeSort() {
  const store = useSelector((store: RootState) => store.books);
  const [sortState, setSortState] = useState<SortStatus>(resetForFunction);

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

  function sortStore(): IBook[] {
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

  const sortForNameHandler = useCallback(
    function () {
      if (sortState === increaseForName) {
        setSortState(decreaseForName);
      } else {
        setSortState(increaseForName);
      }
    },
    [sortState]
  );
  const sortForAuthorHandler = useCallback(
    function () {
      if (sortState === increaseForAuthor) {
        setSortState(decreaseForAuthor);
      } else {
        setSortState(increaseForAuthor);
      }
    },
    [sortState]
  );
  const resetSort = useCallback(() => setSortState(resetForFunction), []);

  return { sortStore, sortForNameHandler, sortForAuthorHandler, resetSort };
}
