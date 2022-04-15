import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../types/types";
import {
  bookConstants,
  buttonConstants,
  errorConstants,
} from "../../constants/constants";
import { actionEditBook } from "../../redux/actions";
import { RootState } from "../../redux/store";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import {
  ButtonsWrapper,
  HeaderModal,
  ModalWindowWrapper,
  WhiteRectangle,
  WrapperInputs,
} from "./ModalWindow.element";
import { isValid } from "./helpers";

const { save, cancel } = buttonConstants;
const { author, numberPage, bookName, yearWrite } = bookConstants;
const { authorError, nameError } = errorConstants;

const ModalWindowEdit = ({
  closeModal,
  header,
}: {
  closeModal: () => void;
  header: string;
}) => {
  const dispatch = useDispatch();
  const selectBook = useSelector(
    (store: RootState) => store.selectedBook as IBook
  );
  const [authorValue, setAuthorValue] = useState(selectBook.author);
  const [bookNameValue, setBookNameValue] = useState(selectBook.name);
  const [numberPageValue, setNumberPageValue] = useState(
    String(selectBook?.numberPage)
  );
  const [yearWriteValue, setYearWriteValue] = useState(
    String(selectBook?.yearWriting)
  );
  const [isErrorAuthor, setIsErrorAuthor] = useState(false);
  const [isErrorNameBook, setIsErrorNameBook] = useState(false);

  function setNewBook() {
    const newBook: IBook = {
      id: selectBook.id,
      author: authorValue,
      name: bookNameValue,
      numberPage: Number(numberPageValue),
      yearWriting: Number(yearWriteValue),
      isOpen: true,
    };
    dispatch(actionEditBook(newBook));
    closeModal();
  }
  function handlerButtonSave() {
    if (
      isValid(authorValue, bookNameValue, setIsErrorAuthor, setIsErrorNameBook)
    ) {
      return;
    }
    setNewBook();
  }

  return ReactDOM.createPortal(
    <ModalWindowWrapper>
      <WhiteRectangle>
        <HeaderModal>{header}</HeaderModal>
        <WrapperInputs>
          <Input
            placeholder={author}
            isError={isErrorAuthor}
            errorText={authorError}
            value={authorValue}
            setValue={setAuthorValue}
          />
          <Input
            placeholder={bookName}
            isError={isErrorNameBook}
            errorText={nameError}
            value={bookNameValue}
            setValue={setBookNameValue}
          />
          <Input
            onlyNNumber
            placeholder={numberPage}
            value={numberPageValue}
            setValue={setNumberPageValue}
          />
          <Input
            onlyNNumber
            placeholder={yearWrite}
            value={yearWriteValue}
            setValue={setYearWriteValue}
          />
        </WrapperInputs>
        <ButtonsWrapper>
          <Buttons text={save} onClick={handlerButtonSave} />
          <Buttons text={cancel} onClick={closeModal} />
        </ButtonsWrapper>
      </WhiteRectangle>
    </ModalWindowWrapper>,
    document.body
  );
};

export default ModalWindowEdit;
