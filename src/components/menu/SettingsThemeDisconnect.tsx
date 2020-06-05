import React from "react";
import { IconsGroup, IconContainer } from "./Menu.styled";
import { Settings, ThemeColor, Disconnect } from "../../assets/icons";
import { connect, ConnectedProps } from "react-redux";
import actions from "../../actions";

export type SettingsThemeDisconnectProps = ConnectedProps<typeof connector>;

const SettingsThemeDisconnect = ({
  dispatch,
}: SettingsThemeDisconnectProps) => {
  const handleToggleThemeColor = () => dispatch(actions.theme.toggleDayNight());

  return (
    <IconsGroup>
      <IconContainer>
        <Settings />
      </IconContainer>
      <IconContainer greyBackground onClick={handleToggleThemeColor}>
        <ThemeColor />
      </IconContainer>
      <IconContainer>
        <Disconnect />
      </IconContainer>
    </IconsGroup>
  );
};

const connector = connect();

export default connector(SettingsThemeDisconnect);
