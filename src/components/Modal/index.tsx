import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as S from "./Modal.styled";
import { connect, ConnectedProps } from "react-redux";
import { GlobalState } from "../../reducers";
import { AnimatePresence } from "framer-motion";
import { Validation, Cancel, Trash } from "../../assets/icons";
import actions from "../../actions";

export type ModalProps = ConnectedProps<typeof connector>;

export const Modal = ({ modalState, dispatch }: ModalProps) => {
  const portalNode = document.createElement("div");
  portalNode.id = "modal-root";
  const cancelModal = () => {
    dispatch(actions.modal.cancel());
  };
  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      portalNode.parentNode!.removeChild(portalNode);
    };
  });

  return ReactDOM.createPortal(
    <CreateModal cancelModal={cancelModal} isActive={modalState.isActive} />,
    portalNode
  );
};

interface CreateModalProps {
  cancelModal: () => void;
  isActive: boolean;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  bandeauHidden: {
    height: "0px",
    top: "50%",
    transition: {
      duration: 0.2,
    },
  },
  bandeauVisible: {
    height: "200px",
    top: "calc(50% - 100px)",
  },
};

export const CreateModal = ({
  cancelModal,
  isActive = false,
}: CreateModalProps) => {
  const handleClickOutside = () => cancelModal();
  //prevents close dialog by clicking on middle
  const handleClickInside = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <AnimatePresence>
      {isActive && (
        <S.Modal
          key="Modal"
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-testid="Modal"
          variants={variants}
          onClick={handleClickOutside}
        >
          <S.Bandeau
            key="Bandeau"
            initial="bandeauHidden"
            animate="bandeauVisible"
            exit="bandeauHidden"
            variants={variants}
            onClick={handleClickInside}
          >
            <S.IconWrapper>
              <S.IconVerticalLine />
              <S.IconContainer>
                <Trash />
              </S.IconContainer>
            </S.IconWrapper>
            <S.Texte whileHover={{ scale: 1.1 }}>
              <Cancel />
            </S.Texte>
            <S.Texte whileHover={{ scale: 1.1 }}>
              <Validation />
            </S.Texte>
          </S.Bandeau>
        </S.Modal>
      )}
    </AnimatePresence>
  );
};

const mapStateToProps = (state: GlobalState) => {
  return { modalState: state.modal };
};

const connector = connect(mapStateToProps);

export default connector(Modal);
