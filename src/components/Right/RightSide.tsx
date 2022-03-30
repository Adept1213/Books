import { useState } from "react";
import { useSelector } from "react-redux";
import {
  bookConstants,
  buttonConstants,
  deleteText,
} from "../../constants/constants";
import { RootState } from "../../redux/store";
import { Buttons } from "../Buttons/Buttons";
import ModalWindowAdd from "../modalWindows/ModalWindowAdd";
import ModalWindowDelete from "../modalWindows/ModalWindowDelete";
import ModalWindowEdit from "../modalWindows/ModalWindowEdit";
import InfoAboutBook from "./InfoAboutBook";
import { ButtonWrapper, RightWrapper } from "./RightSide.element";

const { author, bookName, yearWrite, numberPage } = bookConstants;
const { add, edit, deleteBook } = buttonConstants;

const RightSide = () => {
  const store = useSelector((store: RootState) => store);
  const selectBook = store.find((book) => book.isOpen);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  return (
    <RightWrapper>
      <InfoAboutBook name={author} info={selectBook ? selectBook.author : ""} />
      <InfoAboutBook name={bookName} info={selectBook ? selectBook.name : ""} />
      <InfoAboutBook
        name={yearWrite}
        info={selectBook ? String(selectBook.yearWriting) : ""}
      />
      <InfoAboutBook
        name={numberPage}
        info={selectBook ? String(selectBook.numberPage) : ""}
      />
      <ButtonWrapper>
        <Buttons text={add} onClick={() => setIsOpenAddModal(true)} />
        {selectBook && (
          <>
            <Buttons text={edit} onClick={() => setIsOpenEditModal(true)} />
            <Buttons
              text={deleteBook}
              onClick={() => setIsOpenDeleteModal(true)}
            />
          </>
        )}
      </ButtonWrapper>
      {isOpenAddModal && (
        <ModalWindowAdd
          closeModal={() => setIsOpenAddModal(false)}
          header={add}
        />
      )}
      {isOpenEditModal && (
        <ModalWindowEdit
          closeModal={() => setIsOpenEditModal(false)}
          header={edit}
        />
      )}
      {isOpenDeleteModal && (
        <ModalWindowDelete
          closeModal={() => setIsOpenDeleteModal(false)}
          header={deleteText}
        />
      )}
    </RightWrapper>
  );
};

export default RightSide;
