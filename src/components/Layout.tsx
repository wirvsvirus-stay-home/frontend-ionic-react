import React, { PropsWithChildren } from "react";
import {
  IonPage,
  IonHeader as Header,
  IonContent as NativeContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem
} from "@ionic/react";
import styled from "styled-components";
import { shareOutline, cellularOutline } from "ionicons/icons";

const IonContent = styled(NativeContent)`
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const ContentCard = styled(IonCard)`
  z-index: 100;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  border-radius: 2em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  background: var(--ion-color-dark);
  background: linear-gradient(
    #000 0%,
    rgba(var(--ion-color-primary-rgb), 0.2) 60%
  );
`;

type LayoutProps = {
  title?: string;
  toolbar?: JSX.Element;
};

const IonHeader = styled(Header)`
  /* border: 4px solid green; */
`;

const MyContent = styled(IonContent)``;

const MyToolbar = styled(IonToolbar)`
  height: 84px;
  background-color: var(--ion-color-dark);
  --background: linear-gradient(
    var(--ion-color-dark) 0%,
    rgba(var(--ion-color-primary-rgb), 0.2) 100%
  );
  /* clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%); */
`;

const TransparentItem = styled(IonItem)`
  --background: transparent;
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  toolbar
}: PropsWithChildren<LayoutProps>) => {
  return (
    <IonPage color="dark">
      {/* <IonHeader>
        {!toolbar && (
          <MyToolbar>{title && <IonTitle>{title}</IonTitle>}</MyToolbar>
        )}
        {toolbar && toolbar}
      </IonHeader> */}
      <MyContent color="dark">
        <ContentCard color="dark">
          <IonCardHeader>
            <TransparentItem>
              <IonIcon color="primary" slot="start" icon={shareOutline} />
              <IonIcon color="primary" slot="end" icon={cellularOutline} />
            </TransparentItem>
          </IonCardHeader>

          <IonCardContent color="transparent">
            {React.Children.map(children, child => child)}
          </IonCardContent>
        </ContentCard>
      </MyContent>
    </IonPage>
  );
};

export default Layout;
