import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../types/types";
import {
  bookConstants,
  buttonConstants,
  errorConstants,
} from "../../constants/constants";
import { actionAddNewBook } from "../../redux/actions";
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
import useValue from "./costumHook";

const { save, cancel } = buttonConstants;
const { author, numberPage, bookName, yearWrite } = bookConstants;
const { authorError, nameError } = errorConstants;

const ModalWindowAdd = ({
  closeModal,
  header,
}: {
  closeModal: () => void;
  header: string;
}) => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.books);
  const lastElementId: number = store[store.length - 1].id;
  // const [authorValue, setAuthorValue] = useState("");
  const authorValue = useValue("");
  // const [bookNameValue, setBookNameValue] = useState("");
  const bookNameValue = useValue("");
  // const [numberPageValue, setNumberPageValue] = useState("");
  const numberPageValue = useValue("");
  // const [yearWriteValue, setYearWriteValue] = useState("");
  const yearWriteValue = useValue("");
  const [isErrorAuthor, setIsErrorAuthor] = useState(false);
  const [isErrorNameBook, setIsErrorNameBook] = useState(false);

  function setNewBook() {
    const newBook: IBook = {
      id: lastElementId + 1,
      author: authorValue.value,
      name: bookNameValue.value,
      numberPage: Number(numberPageValue),
      yearWriting: Number(yearWriteValue),
      isOpen: false,
    };
    dispatch(actionAddNewBook(newBook));
    closeModal();
  }
  function handlerButtonSave() {
    if (
      isValid(
        authorValue.value,
        bookNameValue.value,
        setIsErrorAuthor,
        setIsErrorNameBook
      )
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
            {...authorValue}
          />
          <Input
            placeholder={bookName}
            isError={isErrorNameBook}
            errorText={nameError}
            {...bookNameValue}
          />
          <Input onlyNNumber placeholder={numberPage} {...numberPageValue} />
          <Input onlyNNumber placeholder={yearWrite} {...yearWriteValue} />
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

export default ModalWindowAdd;
