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
import useValue from "./costumHook";

const { save, cancel } = buttonConstants;
const {
  author: authorConst,
  numberPage: numberPageConst,
  bookName: bookNameConst,
  yearWrite: yearWriteConst,
} = bookConstants;
const { authorError, nameError } = errorConstants;

const ModalWindowEdit = ({
  closeModal,
  header,
}: {
  closeModal: () => void;
  header: string;
}) => {
  const dispatch = useDispatch();
  const { author, id, name, numberPage, yearWriting } = useSelector(
    (store: RootState) => store.selectedBook as IBook
  );
  const authorValue = useValue(author);
  const bookNameValue = useValue(name);
  const numberPageValue = useValue(String(numberPage));
  const yearWriteValue = useValue(String(yearWriting));
  const [isErrorAuthor, setIsErrorAuthor] = useState(false);
  const [isErrorNameBook, setIsErrorNameBook] = useState(false);

  function setNewBook() {
    const newBook: IBook = {
      id: id,
      author: authorValue.value,
      name: bookNameValue.value,
      numberPage: Number(numberPageValue.value),
      yearWriting: Number(yearWriteValue.value),
      isOpen: true,
    };
    dispatch(actionEditBook(newBook));
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
            placeholder={authorConst}
            isError={isErrorAuthor}
            errorText={authorError}
            {...authorValue}
          />
          <Input
            placeholder={bookNameConst}
            isError={isErrorNameBook}
            errorText={nameError}
            {...bookNameValue}
          />
          <Input
            onlyNNumber
            placeholder={numberPageConst}
            {...numberPageValue}
          />
          <Input onlyNNumber placeholder={yearWriteConst} {...yearWriteValue} />
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
