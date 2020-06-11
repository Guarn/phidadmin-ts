import styled from "styled-components";

export const ContainerEditor = styled.div``;

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>``;

// SOUS MENU

export const SousMenuContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  transform: translateX(calc(-100% - 10px));
  font-size: 1rem;
  font-weight: normal;
  height: 100%;
`;

export const VerticalBar = styled.div`
  height: 100%;
  width: 6px;
  background-color: ${(props) => props.theme.color};
  border-radius: 3px;
  margin-left: 10px;
`;
