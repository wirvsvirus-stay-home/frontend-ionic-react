import React from "react";
import {
  IonContent,
  IonAvatar,
  IonText,
  IonToolbar,
  IonItem,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";
import styled from "styled-components";

const MyItem = styled(IonItem)`
  --background: transparent;
`;

const MyToolbar = styled(IonToolbar)`
  height: 84px;
  background-color: var(--ion-color-dark);
  --background: linear-gradient(
    var(--ion-color-dark) 0%,
    rgba(var(--ion-color-primary-rgb), 0.2) 100%
  );
`;

const UserStats = () => {
  return (
    <MyToolbar>
      <IonButtons slot="start">
        <IonButton>
          <IonAvatar slot="icon-only">
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              alt="avatar"
            />
          </IonAvatar>
        </IonButton>
        <IonButton>
          <IonIcon slot="icon-only" name="search" />
        </IonButton>
      </IonButtons>
      {/* <IonText color="light">Rank</IonText>
      <IonText>4</IonText> */}
    </MyToolbar>
  );
};

export default UserStats;
