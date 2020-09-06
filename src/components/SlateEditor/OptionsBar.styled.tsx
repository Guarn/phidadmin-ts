import styled from "styled-components/macro";

export const SousMenuContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  transform: translateX(calc(-100% - 10px));
  font-size: 1rem;
  font-weight: normal;
`;

export const VerticalBar = styled.div`
  height: 100%;
  width: 6px;
  background-color: ${(props) => props.theme.color};
  border-radius: 3px;
  margin-left: 10px;
`;
