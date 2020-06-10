import React, { useState } from "react";
import * as S from "./Editor.styled";
import SlateEditor from "../../SlateEditor";
import * as Icons from "../../../assets/icons";

interface EditorProps {
  titreLecon: string;
  titreChapitre: string;
}

const Editor = ({ titreLecon, titreChapitre }: EditorProps) => {
  const [mobileView, setMobileView] = useState(false);

  const handleMobileView = () => {
    setMobileView((c) => !c);
  };
  return (
    <S.ContainerEditor>
      <S.TopBar>
        <S.ContainerCustomButton></S.ContainerCustomButton>
        <S.InfosCours>
          <S.TitreLecon>{titreLecon}</S.TitreLecon>
          <S.TitreChapitre>{titreChapitre}</S.TitreChapitre>
        </S.InfosCours>
        <S.ShorcutsMedia>
          <Icons.Shortcuts />
          <S.Media onClick={handleMobileView}>
            <S.Opcaity opacityIcon={!mobileView}>
              <Icons.MobileView />
            </S.Opcaity>
            <S.Opcaity opacityIcon={mobileView}>
              <Icons.ComputerView />
            </S.Opcaity>
          </S.Media>
        </S.ShorcutsMedia>
      </S.TopBar>
      <S.EditContainer>
        <S.ContainerSlate mobileView={mobileView}>
          <SlateEditor />
        </S.ContainerSlate>
      </S.EditContainer>
    </S.ContainerEditor>
  );
};

export default Editor;
