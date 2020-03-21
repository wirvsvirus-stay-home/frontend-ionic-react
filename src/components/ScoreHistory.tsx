import React from "react";
import {
  IonText,
  IonItem as NativeIonItem,
  IonList,
  IonLabel,
  IonNote,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonAvatar
} from "@ionic/react";
import styled from "styled-components";

const MyList = styled.ul`
  padding: 0;
  background: transparent;
  margin-top: 1em;
`;

const IonItem = styled(NativeIonItem)`
  border: none;
  padding: 0;
  margin: 0;
  --inner-padding-start: 0;
  --inner-padding-top: 0;
  --inner-padding-bottom: 0;
  --inner-padding-end: 0;
  --padding-bottom: 0;
  /* --padding-top: 0; */
  --padding-start: 0.5em;
  /* --padding-end: 0; */
`;

const ListItem = styled(IonItem)`
  border-radius: 1em;
  border: 1px solid var(--ion-color-primary);
  overflow: hidden;
  box-shadow: var(--ion-color-dark) 0em 0em 0.5em;
  margin-top: 0.5em;
`;

type ItemType = {
  id: string;
  timestamp: string;
  title: string;
  type: "PLUS" | "MINUS";
  message: string;
};

type DataType = Array<ItemType>;

type ScoreHistoryProps = {
  data?: DataType;
};

const DEF_DATA: DataType = [
  {
    id: "efa5f2f2-b1f7-43e1-9b5e-9eab3d2221eb",
    timestamp: "11:34 AM",
    title: "Full hour in base",
    message: "Well done! + 200 C",
    type: "PLUS"
  },
  {
    id: "efb5f2f2-b1f7-43e1-9b5e-9eab3d12221eb",
    timestamp: "11:34 AM",
    title: "Base unprotected for 10 min",
    message: "- 250 C",
    type: "MINUS"
  },
  {
    id: "efa5f2f2-21f7-43e1-9b5e-9eab3d2221eb",
    timestamp: "11:34 AM",
    title: "Full hour in base",
    message: "Well done! + 200 C",
    type: "PLUS"
  },
  {
    id: "efa5f2f2-b4f7-43e1-9b5e-9eab3d2221eb",
    timestamp: "11:34 AM",
    title: "Full hour in base",
    message: "Well done! + 200 C",
    type: "PLUS"
  }
];
const Caption = styled(IonText)`
  font-size: 8pt;
`;

function ScoreHistory({ data = DEF_DATA }: ScoreHistoryProps) {
  return (
    <MyList color="transparent">
      {data.map((item: ItemType) => (
        <ListItem lines="none" color="transparent" key={item.id}>
          <IonItem slot="start" lines="none" color="dark">
            <IonLabel>
              <Caption>{item.timestamp}</Caption>
            </IonLabel>
          </IonItem>
          <IonItem lines="none" color="transparent">
            <IonLabel className="ion-text-wrap">
              <IonText color="primary">
                <h2>{item.title}</h2>
              </IonText>
              <IonNote color={item.type === "PLUS" ? "success" : "danger"}>
                <Caption>{item.message}</Caption>
              </IonNote>
            </IonLabel>
          </IonItem>
          <IonAvatar slot="end"></IonAvatar>
          {/* <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <Timestamp>{item.timestamp}</Timestamp>
                </IonCol>
                <IonCol size="6">
                  <IonText color="">{item.title}</IonText>
                  <IonText color={item.type === "PLUS" ? "success" : "danger"}>
                    {item.message}
                  </IonText>
                </IonCol>
                <IonCol size="2"></IonCol>
              </IonRow>
            </IonGrid> */}
        </ListItem>
      ))}
    </MyList>
  );
}

export default ScoreHistory;
