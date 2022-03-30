import { IBook } from "./types/types";

export function getNameInitials(fullName: string): string {
  const arrName = fullName.split(" ");
  if (arrName.length > 2) {
    const name = arrName[0].slice(0, 1);
    const surName = arrName[1].slice(0, 1);
    return [name, surName, arrName[2]].join(".");
  }
  const name = arrName[0].slice(0, 1);
  return [name, arrName[1]].join(".");
}

export function changeIsOpen(id: number, store: IBook[]): IBook[] {
  const copy: IBook[] = store.map((book) =>
    book.id === id
      ? {
          ...book,
          isOpen: !book.isOpen,
        }
      : { ...book, isOpen: false }
  );
  return copy;
}

export function editBook(changeBook: IBook, store: IBook[]): IBook[] {
  const id = changeBook.id;
  const copy: IBook[] = store.map((book) =>
    book.id === id
      ? {
          ...changeBook,
        }
      : { ...book }
  );
  return copy;
}

export function deleteBook(id: number, store: IBook[]): IBook[] {
  const copy = [...store];
  const indexDeleteBook = copy.findIndex((book) => book.id === id);
  copy.splice(indexDeleteBook, 1);
  return copy;
}
