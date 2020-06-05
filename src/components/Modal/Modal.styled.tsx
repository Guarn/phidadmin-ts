import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Bandeau = styled(motion.div)`
  position: absolute;
  left: 0px;
  width: 100%;
  transform-origin: center;
  box-shadow: 0 0 10px ${(props) => props.theme.shadowColor};
  background-color: ${(props) => props.theme.modalBackgroundColor};
  color: ${(props) => props.theme.modalColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  overflow: hidden;
`;

export const Modal = styled(motion.div)`
  position: absolute;
  user-select: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Texte = styled(motion.div)`
  display: flex;
  transform-origin: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const IconWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconVerticalLine = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.borderColor};
  z-index: 1;
`;

export const IconContainer = styled(motion.div)`
  height: 85px;
  width: 85px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.modalBackgroundColor};
  z-index: 2;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
`;
