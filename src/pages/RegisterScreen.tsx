import React, { useState } from "react";
import { IonPage, IonContent, IonButton, IonText } from "@ionic/react";
import { generateUserName } from "../context/AppContext";

const RegisterScreen = () => {
  const [username, setUsername] = useState(generateUserName());
  const handleSubmit = () => {};
  return (
    <IonPage>
      <IonContent>
        <IonText color="primary">{username}</IonText>
        <IonButton
          onClick={() => setUsername(generateUserName())}
          title="Gnerate new Name"
        ></IonButton>
        <IonButton onClick={handleSubmit} title="lets go"></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RegisterScreen;
