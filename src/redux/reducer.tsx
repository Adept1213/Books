import {
  ADD_NEW_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  IS_OPEN_ACTION,
} from "../constants/constants";
import { IBook } from "../types/types";
import { changeIsOpen, deleteBook, editBook } from "../helpers";

const defaultStore: IBook[] = [
  {
    id: 1,
    name: "Трое в лодке, не считая собаки",
    author: "Джером Клапка Джером",
    numberPage: 300,
    yearWriting: 1889,
    isOpen: false,
  },
  {
    id: 2,
    name: "Братья Карамазовы",
    author: "Фёдор Михайлович Достоевский",
    numberPage: 300,
    yearWriting: 1880,
    isOpen: false,
  },
  {
    id: 3,
    name: "Идиот",
    author: "Фёдор Михайлович Достоевский",
    numberPage: 300,
    yearWriting: 1868,
    isOpen: false,
  },
  {
    id: 4,
    name: "Приключения Тома Сойера",
    author: "Марк Твен",
    numberPage: 300,
    yearWriting: 1876,
    isOpen: false,
  },
  {
    id: 5,
    name: "Чёрный лебедь",
    author: "Нассим Николас Талеб",
    numberPage: 300,
    yearWriting: 2007,
    isOpen: false,
  },
  {
    id: 6,
    name: "Чапаев и Пустота",
    author: "Ви́ктор Оле́гович Пеле́вин",
    numberPage: 300,
    yearWriting: 1996,
    isOpen: false,
  },
  {
    id: 7,
    name: "Good to Great",
    author: "James C. Collins",
    numberPage: 300,
    yearWriting: 2001,
    isOpen: false,
  },
];

export const reducer = (
  store: IBook[] = defaultStore,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case IS_OPEN_ACTION:
      return changeIsOpen(payload, store);
    case ADD_NEW_BOOK:
      return [...store, payload];
    case EDIT_BOOK:
      return editBook(payload, store);
    case DELETE_BOOK:
      return deleteBook(payload, store);
    default:
      return store;
  }
};
