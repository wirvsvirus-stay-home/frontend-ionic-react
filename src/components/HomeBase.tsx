import React from "react";
import styled, { StyledComponent } from "styled-components";
import { IonItem, IonImg } from "@ionic/react";

type HomeBaseProps = {
  title: string;
  subtitle: string;
  state: "PROTECTED" | "WARNING" | "UNPROTECTED";
  progress: number;
};

const STATE_COLOR = {
  PROTECTED: "success",
  WARNING: "warning",
  UNPROTECTED: "danger"
};

const BaseCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border-color: var(--ion-color-success);
  border-width: 0.5em;
  border-style: solid;
  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const Progress = styled.div<{ progress: number }>`
  width: 0.5em;
  height: 200px;
  background: black;
  position: relative;
  &::after {
    content: " ";
    height: ${props => `${props.progress}%`};
    width: 100%;
    background: var(--ion-color-success);
    position: absolute;
    bottom: 0;
  }
`;

const MyItem = styled(IonItem)`
  --background: transparent;
`;

const HomeBase: React.FC<HomeBaseProps> = ({
  title,
  subtitle,
  state,
  progress
}: HomeBaseProps) => {
  return (
    <Container>
      <MyItem color="" lines="none">
        <Progress slot="start" progress={progress}></Progress>
        <BaseCircle color={STATE_COLOR[state]}>
          <IonImg></IonImg>
        </BaseCircle>
      </MyItem>
      {/* <div className="progress">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="state-container">
        <div className="state {{ state }}">
          <div className="img">
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default HomeBase;
