import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";
import {
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonList,
} from "@ionic/react";

const Login: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage style={{padding: "50px"}}>
      
      <IonContent>
      
      <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
      </IonContent>
      <button className="Startbutton">Login</button>
    </IonPage>
  );
};

export default Login;
