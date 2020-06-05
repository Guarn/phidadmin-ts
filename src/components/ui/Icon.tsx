import React from "react";
import * as S from "./Icon.styled";
import cours from "../../assets/cours.svg";
import dashboard from "../../assets/dashboard.svg";
import disconnect from "../../assets/disconnect.svg";
import index from "../../assets/index.svg";
import messages from "../../assets/messages.svg";
import notifications from "../../assets/notifications.svg";
import settings from "../../assets/settings.svg";
import themeColor from "../../assets/themeColor.svg";
import users from "../../assets/users.svg";

export interface IconProps {
  icon: Icons;
  extended?: boolean;
}

/**
 * ### Icon component based on name.
 *************************
 *
 * @param {Icons} icon Icon's name.
 * @param {boolean} extended Special parameter to set Icon's height biggest (useful for page icons in menu). Default to **false**.
 *
 * @example
 * <Icon icon={Icons.cours} extended />
 */
export const Icon = ({ icon, extended = false }: IconProps) => {
  const { iconSrc, iconAlt } = getIconSrc(icon);

  return <S.StyledIcon src={iconSrc} alt={iconAlt} />;
};

/**
 * ### Enums all authorized icons with correspondance to string name.
 ***************************
 * @example
 * Icons.annales = "annales"
 */
export enum Icons {
  cours = "cours",
  dashboard = "dashboard",
  disconnect = "disconnect",
  index = "index",
  messages = "messages",
  notifications = "notifications",
  settings = "settings",
  themeColor = "themeColor",
  users = "users",
}

/**
 * ### Get the source path and alt text for a specific Icons icon.
 * ******************************
 * @param {Icons} icon Name of the icon
 * @returns iconSrc, iconAlt
 * @example
 * const {iconSrc,iconAlt} = getIconSrc(Icons.annales);
 * // iconSrc is the path to SVG file.
 * // iconAlt === "Icone annales"
 */
export const getIconSrc = (icon: Icons) => {
  let iconSrc: string;
  switch (icon) {
    case Icons.cours:
      iconSrc = cours;
      break;
    case Icons.dashboard:
      iconSrc = dashboard;
      break;
    case Icons.disconnect:
      iconSrc = disconnect;
      break;
    case Icons.index:
      iconSrc = index;
      break;
    case Icons.messages:
      iconSrc = messages;
      break;
    case Icons.notifications:
      iconSrc = notifications;
      break;
    case Icons.settings:
      iconSrc = settings;
      break;
    case Icons.themeColor:
      iconSrc = themeColor;
      break;
    case Icons.users:
      iconSrc = users;
  }
  return { iconSrc, iconAlt: `Icone ${icon}` };
};
