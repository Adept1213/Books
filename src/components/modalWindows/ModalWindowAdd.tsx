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
import { Buttons } from "../Buttons/Buttons";
import Input from "../Input/Input";
import {
  ButtonsWrapper,
  HeaderModal,
  ModalWindowWrapper,
  WhiteRectangle,
  WrapperInputs,
} from "./ModalWindow.element";

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
  const store = useSelector((store: RootState) => store as IBook[]);
  const lastElementId: number = store[store.length - 1].id;
  const [authorValue, setAuthorValue] = useState("");
  const [bookNameValue, setBookNameValue] = useState("");
  const [numberPageValue, setNumberPageValue] = useState("");
  const [yearWriteValue, setYearWriteValue] = useState("");
  const [isErrorAuthor, setIsErrorAuthor] = useState(false);
  const [isErrorNameBook, setIsErrorNameBook] = useState(false);

  function setNewBook() {
    const newBook: IBook = {
      id: lastElementId + 1,
      author: authorValue,
      name: bookNameValue,
      numberPage: Number(numberPageValue),
      yearWriting: Number(yearWriteValue),
      isOpen: false,
    };
    dispatch(actionAddNewBook(newBook));
    closeModal();
  }

  function checkValid() {
    let isValid = false;
    const author: number = authorValue.split(" ").length;
    if (author !== 2 && author !== 3) {
      setIsErrorAuthor(true);
      isValid = true;
    } else {
      setIsErrorAuthor(false);
    }
    if (bookNameValue.length === 0) {
      setIsErrorNameBook(true);
      isValid = true;
    } else {
      setIsErrorNameBook(false);
    }
    !isValid && setNewBook();
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
          <Buttons text={save} onClick={checkValid} />
          <Buttons text={cancel} onClick={closeModal} />
        </ButtonsWrapper>
      </WhiteRectangle>
    </ModalWindowWrapper>,
    document.body
  );
};

export default ModalWindowAdd;
