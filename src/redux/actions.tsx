import { IBook } from "../types/types";
import {
  ADD_NEW_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  IS_OPEN_ACTION,
} from "../constants/constants";

export function actionChangeIsOpen(id: number) {
  return {
    type: IS_OPEN_ACTION,
    payload: id,
  };
}

export function actionAddNewBook(newBook: IBook) {
  return {
    type: ADD_NEW_BOOK,
    payload: newBook,
  };
}

export function actionEditBook(editBook: IBook) {
  return {
    type: EDIT_BOOK,
    payload: editBook,
  };
}

export function actionDeleteBook(id: number) {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
}
