// @ts-ignore
import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  // @ts-ignore
} from "@ionic/react";
import {
  camera,
  trash,
  close,
  pin,
  walk,
  warning,
  wifi,
  wine,
  trophySharp,
  trophy,
  trophyOutline,
  person,
} from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <div>
        <IonCard>
          <IonCardContent>
            <div className="rankOfSubject">
              <IonCardSubtitle>
                <IonButton color="medium">中文</IonButton>
                <IonButton color="danger">英文</IonButton>
                <IonButton color="success">數學</IonButton>
                <IonButton>常識</IonButton>
                <IonButton color="warning">綜合</IonButton>
              </IonCardSubtitle>
            </div>
          </IonCardContent>
          <IonCardHeader>
            <IonCardTitle>
              <div className="title">小學雞排名</div>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent></IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={trophySharp} slot="start" />
            <IonLabel>1st</IonLabel>
            <IonLabel>Name</IonLabel>
            <div>Score</div>
          </IonItem>

          <IonItem>
            <IonIcon icon={trophy} slot="start" />
            <IonLabel>2nd</IonLabel>
            <IonLabel>Name</IonLabel>
            <div>Score</div>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={trophyOutline} slot="start" />
            <IonLabel>3rd</IonLabel>
            <IonLabel>Name</IonLabel>
            <div>Score</div>
          </IonItem>

          <IonItem>
            <IonIcon icon={person} slot="start" />
            <IonLabel>4th</IonLabel>
            <IonLabel>Name</IonLabel>
            <div>Score</div>
          </IonItem>
          <IonItem>
            <IonIcon icon={person} slot="start" />
            <IonLabel>5th</IonLabel>
            <IonLabel>Name</IonLabel>
            <div>Score</div>
          </IonItem>
        </IonCard>
      </div>
    </IonPage>
  );
};

export default Tab2;
