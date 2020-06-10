import styled from "styled-components/macro";

export const ContainerEditor = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ContainerSlateProps {
  mobileView: boolean;
}

export const ContainerSlate = styled.div<ContainerSlateProps>`
  width: ${({ mobileView }) => (mobileView ? "350px" : "750px")};
  transition: width 0.2s;
`;

export const TopBar = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ContainerCustomButton = styled.div`
  flex: 1;
`;

export const InfosCours = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const TitreLecon = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-block-end: 0;
`;

export const TitreChapitre = styled.h2`
  text-align: center;
  font-style: italic;
  font-size: 1.3rem;
  font-weight: normal;
  margin-block-start: 0;
`;

export const ShorcutsMedia = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

export const Media = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  width: 75px;
  cursor: pointer;
`;

interface OpacityProps {
  opacityIcon: boolean;
}

export const Opcaity = styled.div<OpacityProps>`
  opacity: ${({ opacityIcon }) => (opacityIcon ? 0.5 : 1)};
`;

export const EditContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
