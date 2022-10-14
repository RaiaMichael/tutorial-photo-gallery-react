import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Start.css";
import { useState } from "react";
import {
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonList,
  IonFabButton,
} from "@ionic/react";

import star from "../../public/startPageIcon.png";
import { Route } from "react-router";
import { url } from "inspector";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Start: React.FC = () => {
  const [text, setText] = useState<string>();
  const router = Route;

  function handleClick() {}

  return (
    <IonPage >
      <IonContent>
        <div className="bgImage"></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
            <IonButton href="/login" >Start</IonButton>
       
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Start;
