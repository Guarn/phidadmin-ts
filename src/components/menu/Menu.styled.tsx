import React from "react";
import styled from "styled-components/macro";

export const MenuConteneur = styled.div`
  height: 100%;
  width: 70px;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: border-right 500ms;
  & svg path {
    fill: ${(props) => props.theme.color};
    transition: fill 500ms;
  }
`;

export const Avatar = styled.div`
  font-size: 30px;
  line-height: 4rem;
`;

export const Separator = styled.div`
  width: 60%;
  height: 1px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.borderColor};
  transition: background-color 500ms;
`;

export const IconsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface IconContainerProps {
  size?: "simple" | "extended";
  greyBackground?: boolean;
  onClick?: () => void;
}

// TODO : Integrate Background color changement for theme color in the global style
export const IconContainer: React.FC<IconContainerProps> = ({
  size = "simple",
  greyBackground = false,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        height: size === "simple" ? "50px" : "70px",
        backgroundColor: greyBackground ? "rgba(0,0,0,0.05)" : undefined,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
