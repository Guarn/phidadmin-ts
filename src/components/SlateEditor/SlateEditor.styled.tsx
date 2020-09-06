import styled from "styled-components/macro";

export const ContainerEditor = styled.div``;

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>``;

export const ColContainer = styled.div`
  width: 100px;
  height: 100%;
  position: relative;
`;
