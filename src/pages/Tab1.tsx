import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabButton,
  IonIcon,
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
import { informationCircle, map } from "ionicons/icons";

const Tab1: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonContent>
        <div className="PLevel">
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P3</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P4</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P5</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>P6</IonLabel>
        </IonTabButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
