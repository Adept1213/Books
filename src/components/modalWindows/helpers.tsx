const getIsValidAuthor = (author: number) => author !== 2 && author !== 3;
const getIsaValidBookName = (val: number) => val === 0;

const getValidationError = (author: string, bookName: string) => ({
  isErrorAuthor: getIsValidAuthor(author.split(" ").length),
  isErrorBook: getIsaValidBookName(bookName.length),
});

export const isValid = (
  author: string,
  bookName: string,
  setIsErrorAuthor: React.Dispatch<React.SetStateAction<boolean>>,
  setIsErrorNameBook: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { isErrorAuthor, isErrorBook } = getValidationError(author, bookName);
  setIsErrorAuthor(isErrorAuthor);
  setIsErrorNameBook(isErrorBook);
  return isErrorAuthor || isErrorBook;
};
