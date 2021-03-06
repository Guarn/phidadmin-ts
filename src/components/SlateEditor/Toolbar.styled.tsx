import styled from "styled-components/macro";

interface MenuProps {
  isVisible: boolean;
}
export const Menu = styled.div<MenuProps>`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  margin-top: -6px;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  background-color: ${(props) => props.theme.color};
  transition: opacity 0.2s;
  height: 45px;
  border-radius: 5px;
  box-shadow: 0 0 5px;
`;

export const Outils = styled.div`
  position: relative;
  width: 45px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const Separateur = styled.div`
  width: 1px;
  background-color: #a59d75;
`;

interface RectSelectProps {
  selected: boolean;
}

export const RectSelect = styled.div<RectSelectProps>`
  position: absolute;
  width: ${(props) => (props.selected ? "35px" : "0px")};
  height: 3px;
  bottom: 2px;
  left: 5px;
  border-radius: 3px;
  background-color: #ffda48;
  transition: all 0.2s;
  transform: ${(props) =>
    props.selected ? "translate3d(0,0,0)" : "translate3d(17px,0,0)"};
`;
