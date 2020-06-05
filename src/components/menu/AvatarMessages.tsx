import React from "react";
import { Avatar, IconsGroup, Separator, IconContainer } from "./Menu.styled";
import { Messages, Notifications } from "../../assets/icons";
import actions from "../../actions";
import { connect, ConnectedProps } from "react-redux";
import { modalOperations } from "../../reducers/modal";

type AvatarMessagesProps = ConnectedProps<typeof connector>;

export const AvatarMessages = ({ dispatch }: AvatarMessagesProps) => {
  const handleClick = () => {
    dispatch(
      actions.modal.confirmation({
        operation: modalOperations.create,
        target: "Bidule",
      })
    );
  };
  return (
    <IconsGroup>
      <Avatar>FJ</Avatar>
      <Separator />
      <IconContainer>
        <Messages />
      </IconContainer>
      <IconContainer onClick={handleClick}>
        <Notifications />
      </IconContainer>
    </IconsGroup>
  );
};

const connector = connect();

export default connector(AvatarMessages);
