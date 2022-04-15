import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import {
  bookConstants,
  buttonConstants,
  deleteText,
} from "../../constants/constants";
import { RootState } from "../../redux/store";
import Buttons from "../Buttons/Buttons";
import ModalWindowAdd from "../modalWindows/ModalWindowAdd";
import ModalWindowDelete from "../modalWindows/ModalWindowDelete";
import ModalWindowEdit from "../modalWindows/ModalWindowEdit";
import InfoAboutBook from "./InfoAboutBook";
import { ButtonWrapper, RightWrapper } from "./RightSide.element";

const { author, bookName, yearWrite, numberPage } = bookConstants;
const { add, edit, deleteBook } = buttonConstants;

const RightSide = () => {
  const selectBook = useSelector((store: RootState) => store.selectedBook);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handlerOpenAddModal = useCallback(() => setIsOpenAddModal(true), []);
  const handlerOpenEditModal = useCallback(() => setIsOpenEditModal(true), []);
  const handlerOpenDeleteModal = useCallback(
    () => setIsOpenDeleteModal(true),
    []
  );

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
        <Buttons text={add} onClick={handlerOpenAddModal} />
        {selectBook && (
          <>
            <Buttons text={edit} onClick={handlerOpenEditModal} />
            <Buttons text={deleteBook} onClick={handlerOpenDeleteModal} />
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
