import React from "react";
import * as S from "./Menu.styled";

import AvatarMessages from "./AvatarMessages";
import SettingsThemeDisconnect from "./SettingsThemeDisconnect";
import PagesLink from "./PagesLink";

const Menu = () => {
  return (
    <S.MenuConteneur>
      <AvatarMessages />
      <PagesLink />
      <SettingsThemeDisconnect />
    </S.MenuConteneur>
  );
};

export default Menu;
