import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../types/types";
import { buttonConstants } from "../../constants/constants";
import { actionDeleteBook } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { Buttons } from "../Buttons/Buttons";
import {
  ButtonsWrapper,
  HeaderModal,
  ModalWindowWrapper,
  WhiteRectangle,
  WrapperText,
} from "./ModalWindow.element";

const { yes, no } = buttonConstants;

const ModalWindowDelete = ({
  closeModal,
  header,
}: {
  closeModal: () => void;
  header: string;
}) => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store as IBook[]);
  const selectBook: IBook = store.find((book) => book.isOpen) as IBook;

  function yesButtonHandler() {
    closeModal();
    dispatch(actionDeleteBook(selectBook.id));
  }

  return ReactDOM.createPortal(
    <ModalWindowWrapper>
      <WhiteRectangle>
        <HeaderModal>{header}</HeaderModal>
        <WrapperText>
          {selectBook.author}
          <br />
          {selectBook.name}
        </WrapperText>
        <ButtonsWrapper>
          <Buttons text={yes} onClick={yesButtonHandler}></Buttons>
          <Buttons text={no} onClick={() => closeModal()}></Buttons>
        </ButtonsWrapper>
      </WhiteRectangle>
    </ModalWindowWrapper>,
    document.body
  );
};

export default ModalWindowDelete;
