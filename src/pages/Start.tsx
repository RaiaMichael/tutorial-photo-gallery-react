import React from "react";
import {
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
    <IonPage style={{ marginTop: "50vh" }}>
      <IonContent>
        <div className="bgImage"></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/login">
            <button className="Startbutton">Start</button>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Start;
