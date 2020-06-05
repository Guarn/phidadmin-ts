import React from "react";
import { IconsGroup, IconContainer } from "./Menu.styled";
import { Dashboard, Annales, Cours, Index, Users } from "../../assets/icons";

const PagesLink = () => {
  return (
    <IconsGroup>
      <IconContainer size="extended">
        <Dashboard />
      </IconContainer>
      <IconContainer size="extended">
        <Annales />
      </IconContainer>
      <IconContainer size="extended">
        <Users />
      </IconContainer>
      <IconContainer size="extended">
        <Cours />
      </IconContainer>
      <IconContainer size="extended">
        <Index />
      </IconContainer>
    </IconsGroup>
  );
};

export default PagesLink;
