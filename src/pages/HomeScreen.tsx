import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

// import "./Tab1.css";
import ScoreHistory from "../components/ScoreHistory";
import Layout from "../components/Layout";
import UserStats from "../components/UserStats";
import HomeBase from "../components/HomeBase";

const HomeScreen: React.FC = () => {
  return (
    <Layout toolbar={<UserStats />} title="Score History">
      <HomeBase
        title="Base protected"
        subtitle="100% complete"
        progress={20}
        state="PROTECTED"
      />
      <ScoreHistory />
    </Layout>
  );
};

export default HomeScreen;
