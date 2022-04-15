import { IBook, IStoreBooks } from "./types/types";

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

const getSelectedBook = (copyBooks: IBook[], id: number): IBook | undefined => {
  return copyBooks.find((book) => book.id === id);
};

const findSelectedBook = (copyBooks: IBook[]) => {
  return copyBooks.find((book) => book.isOpen === true);
};

export function changeIsOpen(id: number, store: IStoreBooks): IStoreBooks {
  const copyBooks: IBook[] = store.books.map((book) =>
    book.id === id
      ? {
          ...book,
          isOpen: !book.isOpen,
        }
      : { ...book, isOpen: false }
  );
  const copySelectedBook = getSelectedBook(copyBooks, id);
  return {
    books: copyBooks,
    selectedBook:
      copySelectedBook?.isOpen === true ? copySelectedBook : undefined,
  };
}

export function editBook(changeBook: IBook, store: IStoreBooks): IStoreBooks {
  const id = changeBook.id;
  const copyBooks: IBook[] = store.books.map((book) =>
    book.id === id
      ? {
          ...changeBook,
        }
      : { ...book }
  );

  return {
    books: copyBooks,
    selectedBook: findSelectedBook(copyBooks),
  };
}

export function deleteBook(id: number, store: IStoreBooks): IStoreBooks {
  const copy: IStoreBooks = {
    books: [...store.books],
    selectedBook: undefined,
  };
  const { books } = copy;
  const indexDeleteBook = books.findIndex((book) => book.id === id);
  books.splice(indexDeleteBook, 1);
  return copy;
}
